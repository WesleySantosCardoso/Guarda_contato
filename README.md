# WesleySantosCardosoMain

// Tenta estabelecer a conexão
$conexao = mysqli_connect('host', 'usuario', 'senha', 'banco_de_dados');

// Verifica se a conexão foi bem-sucedida
if (!$conexao) {
    die('Erro de conexão: ' . mysqli_connect_error());
}

// Executa a consulta
$consulta = "SELECT * FROM tabela";
$resultado = mysqli_query($conexao, $consulta);

// Verifica se a consulta foi bem-sucedida
if (!$resultado) {
    die('Erro na consulta: ' . mysqli_error($conexao));
}

// Fecha a conexão
mysqli_close($conexao);

$conexao = mysqli_connect('host', 'usuario', 'senha', 'banco_de_dados');

if (!$conexao) {
    die('Erro de conexão: ' . mysqli_connect_error());
}

// Uso de prepared statement
$consulta = "SELECT * FROM tabela";
$stmt = mysqli_prepare($conexao, $consulta);

if (!$stmt) {
    die('Erro na preparação da consulta: ' . mysqli_error($conexao));
}

// Executa a consulta
mysqli_stmt_execute($stmt);

// Obtém os resultados
$resultado = mysqli_stmt_get_result($stmt);

// Processa os resultados, por exemplo:
while ($linha = mysqli_fetch_assoc($resultado)) {
    echo $linha['campo'];
}

// Fecha a conexão e o statement
mysqli_stmt_close($stmt);
mysqli_close($conexao);
