PGDMP     '    8            	    {            OCA    13.11 (Debian 13.11-0+deb11u1)    13.11 (Debian 13.11-0+deb11u1)     G           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            H           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            I           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            J           1262    32874    OCA    DATABASE     Z   CREATE DATABASE "OCA" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'es_AR.UTF-8';
    DROP DATABASE "OCA";
                postgres    false            �            1259    32877    cursos    TABLE       CREATE TABLE public.cursos (
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
       public         heap    postgres    false            �            1259    32875    cursos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cursos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.cursos_id_seq;
       public          postgres    false    201            K           0    0    cursos_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.cursos_id_seq OWNED BY public.cursos.id;
          public          postgres    false    200            �            1259    32890    usuarios    TABLE       CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    apellido character varying(255) NOT NULL,
    edad integer,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    pass character varying(255) NOT NULL,
    cellphone integer,
    birthday date,
    rol text,
    fecha_registro timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    fecha_actualizacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    32888    usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.usuarios_id_seq;
       public          postgres    false    203            L           0    0    usuarios_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;
          public          postgres    false    202            �           2604    32880 	   cursos id    DEFAULT     f   ALTER TABLE ONLY public.cursos ALTER COLUMN id SET DEFAULT nextval('public.cursos_id_seq'::regclass);
 8   ALTER TABLE public.cursos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    201    200    201            �           2604    32893    usuarios id    DEFAULT     j   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203            B          0    32877    cursos 
   TABLE DATA           t   COPY public.cursos (id, nombrecurso, lenguaje, duracion, estrellas, dificultad, descripcion, contenido) FROM stdin;
    public          postgres    false    201   �       D          0    32890    usuarios 
   TABLE DATA           �   COPY public.usuarios (id, nombre, apellido, edad, username, email, pass, cellphone, birthday, rol, fecha_registro, fecha_actualizacion) FROM stdin;
    public          postgres    false    203   �       M           0    0    cursos_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.cursos_id_seq', 3, true);
          public          postgres    false    200            N           0    0    usuarios_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.usuarios_id_seq', 1, true);
          public          postgres    false    202            �           2606    32887    cursos cursos_nombrecurso_key 
   CONSTRAINT     _   ALTER TABLE ONLY public.cursos
    ADD CONSTRAINT cursos_nombrecurso_key UNIQUE (nombrecurso);
 G   ALTER TABLE ONLY public.cursos DROP CONSTRAINT cursos_nombrecurso_key;
       public            postgres    false    201            �           2606    32885    cursos cursos_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.cursos
    ADD CONSTRAINT cursos_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.cursos DROP CONSTRAINT cursos_pkey;
       public            postgres    false    201            �           2606    32902    usuarios usuarios_email_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_email_key UNIQUE (email);
 E   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_email_key;
       public            postgres    false    203            �           2606    32900    usuarios usuarios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    203            B   �   x���1�0��9�O�h�r�ae���$rB���@;�:�x������f�;�\�s�5}u��ąX�����%a&%�*�I���]�E�8��d������^a7r�G��i�TS���UX밹#P�?l���o_�v��`�y#�Y+      D   a   x�3���O��L�*ͬ�42���O�����9z�����F�&@)S3s�?Τ���ԼN##c]C]C3+C+SC=3SCss<R\1z\\\ Z��     