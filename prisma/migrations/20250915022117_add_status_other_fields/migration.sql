-- CreateTable
CREATE TABLE "public"."inscriptions" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "teamName" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "edition" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "organizationOther" TEXT,
    "numberOfMembers" INTEGER NOT NULL,
    "projectTitle" TEXT,
    "projectDescription" TEXT,
    "paymentMethod" TEXT NOT NULL,
    "paymentMethodOther" TEXT,
    "paymentReference" TEXT NOT NULL,
    "teamRepresentative" TEXT NOT NULL,
    "selectedTrack" TEXT[],
    "participant1Name" TEXT NOT NULL,
    "participant1Phone" TEXT NOT NULL,
    "participant1Email" TEXT NOT NULL,
    "participant1BirthDate" TIMESTAMP(3) NOT NULL,
    "participant1Gender" TEXT NOT NULL,
    "participant1Education" TEXT NOT NULL,
    "participant1Status" TEXT[],
    "participant1StatusOther" TEXT,
    "participant2Name" TEXT NOT NULL,
    "participant2Phone" TEXT NOT NULL,
    "participant2Email" TEXT NOT NULL,
    "participant2BirthDate" TIMESTAMP(3) NOT NULL,
    "participant2Gender" TEXT NOT NULL,
    "participant2Education" TEXT NOT NULL,
    "participant2Status" TEXT[],
    "participant2StatusOther" TEXT,
    "participant3Name" TEXT,
    "participant3Phone" TEXT,
    "participant3Email" TEXT,
    "participant3BirthDate" TIMESTAMP(3),
    "participant3Gender" TEXT,
    "participant3Education" TEXT,
    "participant3Status" TEXT[],
    "participant3StatusOther" TEXT,
    "validationDate" TIMESTAMP(3) NOT NULL,
    "acceptTerms" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "inscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "inscriptions_teamName_key" ON "public"."inscriptions"("teamName");

-- CreateIndex
CREATE UNIQUE INDEX "inscriptions_participant1Email_key" ON "public"."inscriptions"("participant1Email");

-- CreateIndex
CREATE UNIQUE INDEX "inscriptions_participant2Email_key" ON "public"."inscriptions"("participant2Email");

-- CreateIndex
CREATE UNIQUE INDEX "inscriptions_participant3Email_key" ON "public"."inscriptions"("participant3Email");
