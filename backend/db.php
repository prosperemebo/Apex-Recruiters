<?php

class Database
{
    private $host = 'localhost';
    private $db_name = 'apexcp_recruiters';
    private $username = 'apexcp_prosper';
    private $password = 'Pf6EfDfdnntPcW9';
    private $conn;

    public function connect()
    {
        $dsn = 'mysql:host=' . $this->host . '; dbname=' . $this->db_name . ';charset=utf8';
        $this->conn = null;

        try {
            $this->conn = new PDO($dsn, $this->username, $this->password);

            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo 'Connection Error: ';
        }

        return $this->conn;
    }
}
