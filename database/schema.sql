-- Script de création de la table inscriptions pour TIBUCE Afrique
-- À exécuter dans votre base de données PostgreSQL (Neon)

CREATE TABLE IF NOT EXISTS inscriptions (
    id SERIAL PRIMARY KEY,
    
    -- Informations générales
    team_name VARCHAR(255) NOT NULL UNIQUE,
    country VARCHAR(100) NOT NULL,
    edition VARCHAR(100) NOT NULL,
    organization VARCHAR(100) NOT NULL,
    organization_other VARCHAR(255),
    number_of_members INTEGER NOT NULL CHECK (number_of_members IN (2, 3)),
    project_title VARCHAR(500),
    project_description TEXT,
    payment_method VARCHAR(100) NOT NULL,
    payment_method_other VARCHAR(255),
    payment_reference VARCHAR(255) NOT NULL,
    team_representative VARCHAR(255) NOT NULL,
    selected_track JSONB DEFAULT '[]',
    
    -- Participant 1
    participant1_name VARCHAR(255) NOT NULL,
    participant1_phone VARCHAR(20) NOT NULL,
    participant1_email VARCHAR(255) NOT NULL UNIQUE,
    participant1_birth_date DATE NOT NULL,
    participant1_gender CHAR(1) NOT NULL CHECK (participant1_gender IN ('H', 'F')),
    participant1_education VARCHAR(100) NOT NULL,
    participant1_status JSONB DEFAULT '[]',
    
    -- Participant 2
    participant2_name VARCHAR(255) NOT NULL,
    participant2_phone VARCHAR(20) NOT NULL,
    participant2_email VARCHAR(255) NOT NULL UNIQUE,
    participant2_birth_date DATE NOT NULL,
    participant2_gender CHAR(1) NOT NULL CHECK (participant2_gender IN ('H', 'F')),
    participant2_education VARCHAR(100) NOT NULL,
    participant2_status JSONB DEFAULT '[]',
    
    -- Participant 3 (optionnel)
    participant3_name VARCHAR(255),
    participant3_phone VARCHAR(20),
    participant3_email VARCHAR(255),
    participant3_birth_date DATE,
    participant3_gender CHAR(1) CHECK (participant3_gender IN ('H', 'F')),
    participant3_education VARCHAR(100),
    participant3_status JSONB DEFAULT '[]',
    
    -- Validation
    validation_date DATE NOT NULL,
    accept_terms BOOLEAN NOT NULL DEFAULT false,
    
    -- Métadonnées
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_inscriptions_team_name ON inscriptions(team_name);
CREATE INDEX IF NOT EXISTS idx_inscriptions_created_at ON inscriptions(created_at);
CREATE INDEX IF NOT EXISTS idx_inscriptions_country ON inscriptions(country);
CREATE INDEX IF NOT EXISTS idx_inscriptions_edition ON inscriptions(edition);

-- Contrainte pour s'assurer qu'il n'y a pas de doublons d'emails
CREATE UNIQUE INDEX IF NOT EXISTS idx_unique_participant1_email ON inscriptions(participant1_email) WHERE participant1_email IS NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS idx_unique_participant2_email ON inscriptions(participant2_email) WHERE participant2_email IS NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS idx_unique_participant3_email ON inscriptions(participant3_email) WHERE participant3_email IS NOT NULL;

-- Fonction pour mettre à jour automatiquement updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger pour updated_at
CREATE TRIGGER update_inscriptions_updated_at 
    BEFORE UPDATE ON inscriptions 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Vues utiles pour les statistiques
CREATE OR REPLACE VIEW inscription_stats AS
SELECT 
    COUNT(*) as total_inscriptions,
    COUNT(CASE WHEN number_of_members = 2 THEN 1 END) as teams_2_members,
    COUNT(CASE WHEN number_of_members = 3 THEN 1 END) as teams_3_members,
    COUNT(DISTINCT country) as countries_represented,
    COUNT(CASE WHEN created_at >= CURRENT_DATE THEN 1 END) as inscriptions_today,
    COUNT(CASE WHEN created_at >= CURRENT_DATE - INTERVAL '7 days' THEN 1 END) as inscriptions_this_week,
    COUNT(CASE WHEN created_at >= CURRENT_DATE - INTERVAL '30 days' THEN 1 END) as inscriptions_this_month
FROM inscriptions;

-- Vue pour les statistiques par pays
CREATE OR REPLACE VIEW country_stats AS
SELECT 
    country,
    COUNT(*) as total_teams,
    COUNT(CASE WHEN number_of_members = 2 THEN 1 END) as teams_2_members,
    COUNT(CASE WHEN number_of_members = 3 THEN 1 END) as teams_3_members
FROM inscriptions
GROUP BY country
ORDER BY total_teams DESC;

-- Vue pour les statistiques par organisation
CREATE OR REPLACE VIEW organization_stats AS
SELECT 
    organization,
    COUNT(*) as total_teams,
    COUNT(CASE WHEN number_of_members = 2 THEN 1 END) as teams_2_members,
    COUNT(CASE WHEN number_of_members = 3 THEN 1 END) as teams_3_members
FROM inscriptions
GROUP BY organization
ORDER BY total_teams DESC;

-- Commentaires sur la table
COMMENT ON TABLE inscriptions IS 'Table des inscriptions aux événements TIBUCE Afrique';
COMMENT ON COLUMN inscriptions.team_name IS 'Nom de l''équipe participant';
COMMENT ON COLUMN inscriptions.country IS 'Pays de représentation';
COMMENT ON COLUMN inscriptions.edition IS 'Édition concernée (année/ville)';
COMMENT ON COLUMN inscriptions.organization IS 'Type d''organisation représentée';
COMMENT ON COLUMN inscriptions.number_of_members IS 'Nombre de membres dans l''équipe (2 ou 3)';
COMMENT ON COLUMN inscriptions.selected_track IS 'Volet choisi (Business Game, Challenge, ou les deux)';
COMMENT ON COLUMN inscriptions.participant1_email IS 'Email du participant 1 (représentant)';
COMMENT ON COLUMN inscriptions.participant2_email IS 'Email du participant 2';
COMMENT ON COLUMN inscriptions.participant3_email IS 'Email du participant 3 (optionnel)';
COMMENT ON COLUMN inscriptions.accept_terms IS 'Acceptation des conditions d''utilisation';
