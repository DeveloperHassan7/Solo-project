CREATE TABLE "user" (
	"id" serial PRIMARY KEY,
	"username" varchar(80),
	"password" varchar(80) UNIQUE,
	"created_at" TIMESTAMP DEFAULT 'now()',
	"full_name" varchar(80),
	"bio" varchar(1000),
	"phone_number" varchar,
	"profile_image_url" varchar(150),
	"email_address" varchar(255) 

);

select * from "user";
DROP TABLE "user";

INSERT INTO "user" ("username", "password", "full_name", "bio", "phone_number", "profile_image_url", "email_address")
VALUES ('Hassan', 'supreme', 'Hassan Nur', 'Hey Im Hassan', '701-780-2158','images/nipsey.jpeg','developerhassan@theworld.com'),
('Ibrahim', 'portland', 'Ibrahim Nur', 'Hey Im Ibrahim', '701-780-2160','images/nipsey.jpeg','developerhassan7@theworld.com');



CREATE TABLE "building" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"name" varchar (80),
	"zip_code" varchar(10) NOT NULL,
	"state" varchar(80) NOT NULL,
	"city" varchar(80) NOT NULL,
	"description" varchar (1000) NOT NULL,
	"apartment_image_url" varchar(255) NOT NULL,
	"address" varchar(255) NOT NULL,
	"website" varchar(255) NOT NULL,
	"property_management_id" integer references "property_management",
	"bed1_1bathroom" BOOLEAN NOT NULL DEFAULT false ,
	"bed2_1bathroom" BOOLEAN NOT NULL DEFAULT false,
	"bed3_2bathroom" BOOLEAN NOT NULL DEFAULT false,
	"studio" BOOLEAN NOT NULL DEFAULT false,
	"price_range" DECIMAL NOT NULL,
	"balcony" BOOLEAN NOT NULL DEFAULT false,
	"cable_ready" BOOLEAN NOT NULL DEFAULT false,
	"dishwasher" BOOLEAN NOT NULL DEFAULT false,
	"controlled_access" BOOLEAN NOT NULL DEFAULT false,
	"internet" BOOLEAN NOT NULL DEFAULT false,
	"some_utilities_covered" BOOLEAN NOT NULL DEFAULT false,
	"storage_place" BOOLEAN NOT NULL DEFAULT false,
	"fireplace" BOOLEAN NOT NULL DEFAULT false,
	"pet_friendly" BOOLEAN NOT NULL DEFAULT false,
	"in_unit_laundry" BOOLEAN NOT NULL DEFAULT false,
	"secured_garage" BOOLEAN NOT NULL DEFAULT false,
	"fitness_center" BOOLEAN NOT NULL DEFAULT false,
	"drug_distribution" BOOLEAN NOT NULL DEFAULT false,
	"tax_evasion" BOOLEAN NOT NULL DEFAULT false,
	"felony_assult" BOOLEAN NOT NULL DEFAULT false,
	"grand_theft" BOOLEAN NOT NULL DEFAULT false,
	"manslaughter" BOOLEAN NOT NULL DEFAULT false
);

select * from "building";

 

INSERT INTO "building" ("name", "zip_code", "state", "city", "description", "apartment_image_url", "address", "website", "property_management_id", "bed1_1bathroom", "bed2_1bathroom", "bed3_2bathroom", "studio", "price_range", "balcony", "cable_ready", "dishwasher", "controlled_access", "internet", "some_utilities_covered", "storage_place", "fireplace", "pet_friendly", "in_unit_laundry", "secured_garage", "fitness_center", "drug_distribution", "tax_evasion", "felony_assult", "grand_theft", "manslaughter" )
VALUES ( 'Urban View Apartments','58104', 'North Dakota', 'Fargo','Urban View Apartments are just a half-block off Broadway and within a block of over 10 establishments including restaurants, bars, coffee shops, retailers and art/entertainment venues. Choose from a range of studio, one-, and two-bedroom floor plans, each featuring a washer and dryer', 'images/apartment1.jpeg', '4955 28th Ave SW', 'https://www.rent.com/north-dakota/fargo-apartments', '1', 't', 'f', 't', 'f', '675', 'f', 't', 't', 't', 'f', 'f', 'f', 'f', 'f', 't', 'f', 'f', 'f', 't', 'f', 't', 'f'),
( 'Goldenway Apartments','58103', 'North Dakota', 'Fargo', 'Goldenway Apartments is located in West Fargo close to plenty of parks, shopping, restaurants and more! The efficiency, one, two, and three bedroom units are spacious, updated and great for entertaining guests. At Goldenway Apartments it will be easy to feel right at home.', 'images/apartment2.jpeg', '4654 13th Ave SW', 'https://www.rent.com/north-dakota/fargo-apartments', '1', 't', 'f', 't', 'f', '700', 'f', 't', 't', 't', 'f', 'f', 'f', 'f', 'f', 't', 'f', 'f', 'f', 't', 'f', 't', 'f'),
( 'Hope View Apartments','58102', 'North Dakota', 'Fargo', 'Hope View Apartments is located in South Fargo close to plenty of parks, shopping, restaurants and more! The efficiency, one, two, and three bedroom units are spacious, updated and great for entertaining guests. At Hope View Apartments it will be easy to feel right at home.', 'images/apartment3.jpeg', '3254 32th Ave S', 'https://www.rent.com/north-dakota/fargo-apartments', '1', 't', 'f', 't', 'f', '800', 'f', 't', 't', 't', 'f', 'f', 'f', 'f', 'f', 't', 'f', 'f', 'f', 't', 'f', 't', 'f'),
( 'River Side Apartments','58104', 'North Dakota', 'Fargo', 'River Side Apartments is located in West Fargo close to plenty of parks, shopping, restaurants and more! The efficiency, one, two, and three bedroom units are spacious, updated and great for entertaining guests. At River Side Apartments it will be easy to feel right at home.', 'images/apartment4.jpeg', '3654 23th Ave SW', 'https://www.rent.com/north-dakota/fargo-apartments', '1', 't', 'f', 't', 'f', '700', 'f', 't', 't', 't', 'f', 'f', 'f', 'f', 'f', 't', 'f', 'f', 'f', 't', 'f', 't', 'f');



DROP TABLE "building";


CREATE TABLE "favorites" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"user_id" integer references "user",
	"building_id" integer references "building",
	"private_note" varchar(10000) NOT NULL,
	"public_note" varchar(10000) NOT NULL,
	"recommend" BOOLEAN

);

select * FROM "favorites";
INSERT INTO "favorites" ("user_id", "building_id", "private_note", "public_note", "recommend")
VALUES ('1', '1', 'Waiting on a response from the apartment managee overall the process is much smoother than the rest', 'The management was really nice and understanding, i have been upfront from the beginning about my situation and so far they they have been cool', 'f'),
('2', '2', 'I got the apartment', 'The management was really nice and understanding, i have been upfront from the beginning about my situation and so far they they have been cool', 't');


select * from "favorites"
join "building" on "building"."id" = "favorites"."building_id"
join "user" on "user"."id" = "favorites"."user_id";

DROP TABLE "favorites";

CREATE TABLE "property_management" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(80) NOT NULL,
	"phone_number" varchar(80) NOT NULL,
	"website" varchar(255) NOT NULL
);

select * from "property_management";
INSERT INTO "property_management" ("name", "phone_number", "website")
VALUES ('Goldenstar', '701-728-2342', 'https://www.goldenstar.com' );

DROP TABLE "property_management";