/*
  Warnings:

  - Added the required column `referenceId` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Booking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "referenceId" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "bookingType" TEXT NOT NULL DEFAULT 'consultation',
    "treatment" TEXT,
    "area" TEXT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "durationMinutes" INTEGER NOT NULL DEFAULT 60,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Booking" (
    "createdAt",
    "date",
    "email",
    "id",
    "referenceId",
    "locale",
    "bookingType",
    "name",
    "phone",
    "time",
    "durationMinutes"
)
SELECT
    "createdAt",
    "date",
    "email",
    "id",
    ('FF-LEGACY-' || upper(substr("id", 1, 8))),
    "locale",
    'consultation',
    "name",
    "phone",
    "time",
    60
FROM "Booking";
DROP TABLE "Booking";
ALTER TABLE "new_Booking" RENAME TO "Booking";
CREATE UNIQUE INDEX "Booking_referenceId_key" ON "Booking"("referenceId");
CREATE INDEX "Booking_createdAt_idx" ON "Booking"("createdAt");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
