--
-- PostgreSQL database dump
--

\restrict vbTxahKP5p6wlxRsctU7jGIo36x9ylYS0weia9BKnFJtOR87Ubp9VyPLMg4A123

-- Dumped from database version 16.10
-- Dumped by pg_dump version 16.10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: achievements; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.achievements (
    id integer NOT NULL,
    title text NOT NULL,
    organization text,
    description text NOT NULL,
    date text,
    "order" integer DEFAULT 0 NOT NULL
);


--
-- Name: achievements_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.achievements_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: achievements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.achievements_id_seq OWNED BY public.achievements.id;


--
-- Name: articles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.articles (
    id integer NOT NULL,
    title text NOT NULL,
    summary text NOT NULL,
    content text,
    published_at text NOT NULL,
    link text,
    platform text
);


--
-- Name: articles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.articles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: articles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.articles_id_seq OWNED BY public.articles.id;


--
-- Name: contact_messages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.contact_messages (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    message text NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


--
-- Name: contact_messages_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.contact_messages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: contact_messages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.contact_messages_id_seq OWNED BY public.contact_messages.id;


--
-- Name: education; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.education (
    id integer NOT NULL,
    institution text NOT NULL,
    degree text NOT NULL,
    year text NOT NULL,
    location text
);


--
-- Name: education_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.education_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: education_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.education_id_seq OWNED BY public.education.id;


--
-- Name: experiences; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.experiences (
    id integer NOT NULL,
    company text NOT NULL,
    title text NOT NULL,
    location text NOT NULL,
    period text NOT NULL,
    description text NOT NULL,
    category text NOT NULL,
    "order" integer DEFAULT 0 NOT NULL
);


--
-- Name: experiences_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.experiences_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: experiences_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.experiences_id_seq OWNED BY public.experiences.id;


--
-- Name: projects; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.projects (
    id integer NOT NULL,
    title text NOT NULL,
    role text NOT NULL,
    client text,
    category text NOT NULL,
    problem text,
    solution text,
    outcome text,
    image_url text,
    tags jsonb,
    link text,
    "order" integer DEFAULT 0 NOT NULL
);


--
-- Name: projects_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;


--
-- Name: skills; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.skills (
    id integer NOT NULL,
    category text NOT NULL,
    name text NOT NULL
);


--
-- Name: skills_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.skills_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: skills_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.skills_id_seq OWNED BY public.skills.id;


--
-- Name: achievements id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.achievements ALTER COLUMN id SET DEFAULT nextval('public.achievements_id_seq'::regclass);


--
-- Name: articles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.articles ALTER COLUMN id SET DEFAULT nextval('public.articles_id_seq'::regclass);


--
-- Name: contact_messages id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contact_messages ALTER COLUMN id SET DEFAULT nextval('public.contact_messages_id_seq'::regclass);


--
-- Name: education id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.education ALTER COLUMN id SET DEFAULT nextval('public.education_id_seq'::regclass);


--
-- Name: experiences id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.experiences ALTER COLUMN id SET DEFAULT nextval('public.experiences_id_seq'::regclass);


--
-- Name: projects id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);


--
-- Name: skills id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.skills ALTER COLUMN id SET DEFAULT nextval('public.skills_id_seq'::regclass);


--
-- Data for Name: achievements; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.achievements (id, title, organization, description, date, "order") FROM stdin;
5	Senior Marketing and Customer Experience Manager	AIESEC in India	Drove go-to-market for two exchange products, boosting qualified leads by 230% through targeted, data-driven campaigns.	2021	3
3	James E.Casey Scholarship	Scholarship America	Awarded a USD 10,000 scholarship through the James E. Casey Scholarship Program to support my undergraduate studies, demonstrating academic excellence and dedication to my educational pursuits.	2019	6
4	Data Master - National Support Team	AIESEC in India	Standardized CRM data, built KPI dashboards, and automated HR workflows to boost accuracy and efficiency.	2021	1
6	Head of Marketing at Girl Up SIT Pune	Symbiosis Institute of Technology	Led marketing for Girl Up SIT Pune, directing social media content and events to grow a 12-member team into a high-impact advocacy engine for gender equity.	2021	5
1	\nNominated for University-wide Chancellor's Gold Award 2023	Symbiosis Internation University	This university-wide award acknowledges students who demonstrate the highest caliber of academic excellence and impactful contributions.	2023	2
2	Merit Scholarship - Semesters 6, 7 and 8	Symbiosis Institute of Technology	This award recognizes students achieving outstanding academic performance in the respective semesters of the undergraduate program.	2021	4
\.


--
-- Data for Name: articles; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.articles (id, title, summary, content, published_at, link, platform) FROM stdin;
1	Developing a Cloud-Based Weapon Detection System Using Transfer Learning and Generative Adversarial Networks	Built YOLO/Detectron2 weapon detection system with GANs for X-ray baggage scanning and public safety.	\N	Oct 2024	https://link.springer.com/chapter/10.1007/978-3-031-68602-3_7#Abs1	Springer
3	Enhancing Traffic Sign Detection and Classification through Multi-Task Learning Using CNNs	Developed CNN-based TSR system achieving 98% accuracy on GTSRB for autonomous driving safety.	\N	Apr 2024	http://www.scopus.com/inward/record.url?eid=2-s2.0-85189347568&partnerID=MN8TOARS	Scopus - Elsevier
2	Comparing Object Detection Models for Public Safety	Compared YOLO vs. Detectron2 for baggage screening to enhance security in malls and public spaces.	\N	Jun 2024	https://www.researchgate.net/publication/381098784_Comparing_Object_Detection_Models_for_Public_Safety	Springer
5	Black Friday Sales Prediction using Supervised Machine Learning	Built Random Forest model to predict customer purchase patterns and optimize Black Friday sales strategy.	\N	Jan 2023	https://ieeexplore.ieee.org/document/10084959	IEEE
4	An Innovative Way of Building Website Using HCI Principles	Applied HCI principles to create user-friendly websites that boost visitor engagement and SEO.	\N	Mar 2023	https://ieeexplore.ieee.org/document/10100973	IEEE
\.


--
-- Data for Name: contact_messages; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.contact_messages (id, name, email, message, created_at) FROM stdin;
\.


--
-- Data for Name: education; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.education (id, institution, degree, year, location) FROM stdin;
1	University of Illinois Urbana-Champaign	Master of Science, Engineering Management (STEM)	2025	Champaign, IL
2	Symbiosis International University	Bachelor of Technology, Information Technology 	2023	Pune, IN
\.


--
-- Data for Name: experiences; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.experiences (id, company, title, location, period, description, category, "order") FROM stdin;
1	Pixo Tech	Intern, Product Consultant	Champaign, IL	May 2025 - Aug 2025	Led product consulting for an automotive SaaS platform, identifying 15 critical feature gaps across 20+ dealer solutions.\n\nDesigned AI-driven concepts (VIN-level advertising, NLP parts search) projected to boost upsell revenue by 20% and cut service downtime by 15%.\n\nDelivered a three-year product roadmap integrating pricing, ML, and analytics to align stakeholders and enable expansion into adjacent markets.	Product	1
3	 Technology Entrepreneur Center, \n Grainger College of Engineering	Entrepreneurial Advisor	Champaign, IL	Feb 2025 - May 2025	Managed a scalable feedback system for 700+ Cozad 2025 participants, reviewing 10–20 venture assignments weekly within 72-hour turnaround.\n\nProvided 1:1 entrepreneurial advising to 15–20 students per week, using tailored frameworks for ideation, pitching, and funding strategy.\n\nCo-led peer-driven workshops for the $500K+ Cozad program, helping design and deliver 15+ skill-building sessions and increasing participant engagement by 40%.	Product	3
2	 Gies College of Business, UIUC	UX Research Assistant	Champaign, IL	May 2025 - Aug 2025	Conducted UX research on how AR and VR experiences shape empathy among UI/UX students.\n\nAnalyzed qualitative data from 60 participants and led literature review across HCI, psychology, and design education.\n\nCo-designed the study and contributed to a scholarly paper, from framing research questions to interpreting findings for academic impact.	UX	2
6	The Akshaya Patra Foundation	Intern, Product	Pune, IN	Jul 2021 - Nov 2021	Led ideation and MVP development of an in-house GPS fleet tracking system to tackle 35% delayed deliveries and $18K/month fuel overruns, improving fleet visibility and efficiency.\n\nValidated demand through 50+ stakeholder interviews and surveys of 120 clients, revealing 82% willingness to pay for accurate ETAs.\n\nBuilt and tested Figma prototypes and a C++ MVP with live tracking, SMS alerts, and analytics, cutting navigation errors by 25% and speeding route planning by 30% for 120+ users.	Product	6
5	AutomationEdge Technologies	Intern, Product Management	Pune, IN	Dec 2022 - Jun 2023	Analyzed 6 RPA competitors to identify AI document processing gaps, creating 15+ battlecards that shaped roadmap priorities and increased enterprise win rate by 18%.\n\nLed 8 story mapping sessions to align engineering and UX on chatbot integration, cutting rework by 40% and reducing delivery time by 3 weeks.\n\nDesigned 12+ Figma prototypes and ran 6 usability tests to improve UX, boosting user satisfaction and streamlining navigation.	Product	5
4	Symbiosis Institute of Technology	Project Manager	Pune, IN	Jul 2023 - Jun 2024	Directed end-to-end delivery of 3 AI-driven public safety and transportation projects, coordinating cross-functional teams of 6–10 and meeting 100% of deadlines.\n\nImplemented a cloud-based dataset annotation workflow that cut preparation time by 40% across 5+ research projects.\n\nManaged stakeholders to publish 4 peer-reviewed papers and led risk and quality control on a retail ML project, improving forecast accuracy by 18%.	Project	4
\.


--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.projects (id, title, role, client, category, problem, solution, outcome, image_url, tags, link, "order") FROM stdin;
1	Alcohol Consumption in the U.S.	Data Analysis & Visualization	\N	Project	Data	Built an interactive Tableau dashboard analyzing alcohol consumption across all 50 U.S. states over a decade, highlighting key trends such as doubling of online alcohol\nsales post-pandemic, using calculated fields, geospatial mapping, and parameter controls to uncover behavioral and regional insights.	\N	\N	["Data Analysis", "Visualization", "Tableau"]	https://public.tableau.com/app/profile/shambhavi.patil/viz/AlcoholConsumptionTrendsinUSA/Dashboard8?publish=yes	1
3	Jell-O Brand Revitalization	Product Revitalization	\N	Project	Product	Repositioned iconic CPG brand using 5Cs, SWOT, and PESTEL to identify declining market relevance.\nProposed JELL-O PLAY edible slime through whitespace analysis and iterative concept validation and created go-to-market plan focused on digital campaigns,\nsustainable packaging, and zero-sugar lines.	\N	\N	["Market Analysis", "Go-to-Market", "Financial Modeling"]	\N	3
4	PantryPal Grocery List App	Project Management	\N	Project	Product	Led PantryPal app project at UIUC, managing UI/UX, dev, and QA teams to deliver collaborative grocery/pantry solution on time and under $50K budget.	\N	\N	["Project Management", "Resource Allocation", "Product Development"]	\N	4
5	COVID Resource Hub - Glide App	Product Management	\N	Project	Product	Built Glide app during COVID-19 to connect Pune, IN residents with verified pharmacies, test centers, and tiffin services.	\N	\N	["Market Analysis", "Prototyping", "MVP Development"]	https://shambhavii24.medium.com/my-first-product-a-glide-app-c6b8e5b5556c	5
2	Duolingo Design Challenge	UX Research and Design	\N	Project	UI/UX	Led a 2-week user research sprint, conducting 10+ targeted interviews and distributing structured surveys to uncover core engagement gaps in Duolingo's learning\nexperience.\nDesigned and prototyped a conversational AI feature in Figma to address key user concerns around limited speaking practice and one-dimensional learning, ensuring\nfull compliance with Duolingo's brand and UI standards.	\N	\N	["UX Research", "Prototyping", "Product Strategy"]	https://www.figma.com/proto/LaU3Bzz8nO3hzM3yAxSSLK/Duolingo-Design-Challenge?node-id=9-2&p=f&t=9v89YNzJgIjxnrLU-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=9%3A2&show-proto-sidebar=1	2
\.


--
-- Data for Name: skills; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.skills (id, category, name) FROM stdin;
8	Tools	Figma
9	Tools	Jira
10	Tools	Miro
1	Product	Product Roadmapping
2	Product	Requirements Prioritization
7	UX	Wireframing & Prototyping 
13	Data & Analytics	SQL 
14	Data & Analytics	Python
16	Data & Analytics	PowerBI
15	Data & Analytics	Tableau
17	Tools	APIs
19	UX	Customer Journey Mapping
6	UX	Qualitative & Quantitative Research
12	Product	Customer Journey Mapping
11	Strategy	Competitive Analysis
4	Strategy	Market Research
20	Strategy	Go-to-Market Strategy
\.


--
-- Name: achievements_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.achievements_id_seq', 1, false);


--
-- Name: articles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.articles_id_seq', 2, true);


--
-- Name: contact_messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.contact_messages_id_seq', 1, false);


--
-- Name: education_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.education_id_seq', 2, true);


--
-- Name: experiences_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.experiences_id_seq', 5, true);


--
-- Name: projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.projects_id_seq', 3, true);


--
-- Name: skills_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.skills_id_seq', 12, true);


--
-- Name: achievements achievements_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.achievements
    ADD CONSTRAINT achievements_pkey PRIMARY KEY (id);


--
-- Name: articles articles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_pkey PRIMARY KEY (id);


--
-- Name: contact_messages contact_messages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contact_messages
    ADD CONSTRAINT contact_messages_pkey PRIMARY KEY (id);


--
-- Name: education education_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.education
    ADD CONSTRAINT education_pkey PRIMARY KEY (id);


--
-- Name: experiences experiences_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.experiences
    ADD CONSTRAINT experiences_pkey PRIMARY KEY (id);


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- Name: skills skills_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.skills
    ADD CONSTRAINT skills_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict vbTxahKP5p6wlxRsctU7jGIo36x9ylYS0weia9BKnFJtOR87Ubp9VyPLMg4A123

