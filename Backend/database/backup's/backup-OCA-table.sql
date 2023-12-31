PGDMP     "                	    {            OCA    15.4    15.4                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    24636    OCA    DATABASE     g   CREATE DATABASE "OCA" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE "OCA";
                postgres    false            �            1259    24638    cursos    TABLE       CREATE TABLE public.cursos (
    id integer NOT NULL,
    nombrecurso character varying(255) NOT NULL,
    lenguaje text NOT NULL,
    duracion character varying(255),
    estrellas integer,
    dificultad text,
    descripcion character varying(500),
    contenido text
);
    DROP TABLE public.cursos;
       public         heap    postgres    false            �            1259    24637    cursos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cursos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.cursos_id_seq;
       public          postgres    false    215                       0    0    cursos_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.cursos_id_seq OWNED BY public.cursos.id;
          public          postgres    false    214            �            1259    24662    usuarios    TABLE     N  CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    apellido character varying(255) NOT NULL,
    edad integer,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    pass character varying(255) NOT NULL,
    cellphone integer,
    rol text
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    24661    usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.usuarios_id_seq;
       public          postgres    false    217                       0    0    usuarios_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;
          public          postgres    false    216            v           2604    24641 	   cursos id    DEFAULT     f   ALTER TABLE ONLY public.cursos ALTER COLUMN id SET DEFAULT nextval('public.cursos_id_seq'::regclass);
 8   ALTER TABLE public.cursos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            w           2604    24665    usuarios id    DEFAULT     j   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217                      0    24638    cursos 
   TABLE DATA           t   COPY public.cursos (id, nombrecurso, lenguaje, duracion, estrellas, dificultad, descripcion, contenido) FROM stdin;
    public          postgres    false    215   �                 0    24662    usuarios 
   TABLE DATA           e   COPY public.usuarios (id, nombre, apellido, edad, username, email, pass, cellphone, rol) FROM stdin;
    public          postgres    false    217   �                  0    0    cursos_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.cursos_id_seq', 1, false);
          public          postgres    false    214                       0    0    usuarios_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.usuarios_id_seq', 2, true);
          public          postgres    false    216            y           2606    24647    cursos cursos_nombrecurso_key 
   CONSTRAINT     _   ALTER TABLE ONLY public.cursos
    ADD CONSTRAINT cursos_nombrecurso_key UNIQUE (nombrecurso);
 G   ALTER TABLE ONLY public.cursos DROP CONSTRAINT cursos_nombrecurso_key;
       public            postgres    false    215            {           2606    24645    cursos cursos_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.cursos
    ADD CONSTRAINT cursos_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.cursos DROP CONSTRAINT cursos_pkey;
       public            postgres    false    215            }           2606    24671    usuarios usuarios_email_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_email_key UNIQUE (email);
 E   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_email_key;
       public            postgres    false    217                       2606    24669    usuarios usuarios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    217                  x������ � �         _   x�3���O��L�*ͬ�42q�8��Sr3s���s9��M������!�Sbr�k^
�gp~P�sbNN*��9���Y�PuI�^T�1z\\\ �/"�     