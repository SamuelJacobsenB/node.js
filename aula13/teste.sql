INSERT INTO usuarios(nome, email, idade) VALUES(
    'Samuel',
    'testeemaul@teste.com',
    14
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    'Pedro',
    'pedromail@teste.com',
    29
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    'Victor',
    'victor@teste.com',
    43
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    'Maria Clara',
    'mariamcjb@teste.com',
    8
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    'Jorge',
    'jorgin@teste.com',
    8
);

----------------------------------------------

SELECT * FROM usuarios WHERE idade = 8;

SELECT * FROM usuarios WHERE nome = 'Samuel';

SELECT * FROM usuarios WHERE idade >= 18;
