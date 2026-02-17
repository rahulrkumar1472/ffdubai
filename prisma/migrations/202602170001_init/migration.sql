CREATE TABLE "Booking" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "locale" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "phone" TEXT NOT NULL,
  "date" TEXT NOT NULL,
  "time" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "Booking_createdAt_idx" ON "Booking"("createdAt");
