<?php

class Database{

	public $host = DB_HOST;
	public $user = DB_USER;
	public $pass = DB_PASS;
	public $dbname = DB_NAME;

	public $link;
	public $error;

	public function __construct(){
		$this->connectDB();
	}

	public function connectDB()
	{
		$this->link = mysqli_connect($this->host, $this->user, $this->pass, $this->dbname);
		if(!$this->link){
			$this->error = "Connection failed: " . mysqli_connect_error();
			return false;
		}
	}

	public function select($query) {
		$result = mysqli_query($this->link, $query) or die(mysqli_error($this->link) . __LINE__);
		
		if (mysqli_num_rows($result) > 0) {
			return $result;
		} 
			return false; 
	}
	

	public function insert($query)
	{
		$insert_row = mysqli_query($this->link, $query) or die(mysqli_error($this->link) . __LINE__);
		if($insert_row){
			return $insert_row;
		}
		return false;
	}

	public function update($query)
	{
		$update_row = mysqli_query($this->link, $query) or die(mysqli_error($this->link) . __LINE__);
		if($update_row){
			return $update_row;
		}
		return false;
	}

	public function delete($query)
	{
		$delete_row = mysqli_query($this->link, $query) or die(mysqli_error($this->link) . __LINE__);
		if($delete_row){
			return $delete_row;
		}
		return false;
	}

	public function procedure($query)
	{
		$stmt = mysqli_query($this->link, $query) or die(mysqli_error($this->link) . __LINE__);
		if($stmt){
			return $stmt;
		}
		return false;
	}
	
	public function backupData(){
		$return='';
		$allTables = array();
		$listBillIDCheckedout = array();

		$return .= "SET FOREIGN_KEY_CHECKS=0;\n\n";

		$result = mysqli_query($this->link, 'SHOW TABLES');
		while($row = mysqli_fetch_array($result)){
			$allTables[] = $row[0];
		}
		
		foreach($allTables as $table){
			$result = mysqli_query($this->link, 'SELECT * FROM ' . $table);
			$num_fields = mysqli_num_fields($result);
			
			$return .= 'DELETE FROM ' . $table . ";\n\n";
			$row2 = mysqli_fetch_array(mysqli_query($this->link, 'SHOW CREATE TABLE ' . $table));
			
			for ($i = 0; $i < $num_fields; $i++) {
				while($row = mysqli_fetch_array($result)){
					$return .= 'INSERT INTO ' . $table . ' VALUES(';
					for($j = 0; $j < $num_fields; $j++){
						$row[$j] = addslashes($row[$j]);
						$row[$j] = str_replace("\n", "\\n", $row[$j]);
						if (isset($row[$j])) { $return .= '"' . $row[$j] . '"'; }
						else { $return .= '""'; }
						if ($j < ($num_fields - 1)) { $return .= ','; }

						if($row[$j] == 'Đã thanh toán'){
							array_push($listBillIDCheckedout, $row[0]);
						}
					}
					$return .= ");\n";
				}
			}
			$return .= "\n\n";
		}

		foreach($listBillIDCheckedout as $billID){
			$return .= "UPDATE Bill SET status = 'Đã thanh toán' WHERE id = " . $billID . ";\n";
		}

		$return .= "\n\nSET FOREIGN_KEY_CHECKS=1;\n\n";
		
		$folder = 'backup/';
		if (!is_dir($folder)) mkdir($folder, 0777, true);
		chmod($folder, 0777);
		
		date_default_timezone_set('Asia/Bangkok');
		$date = date('d-m-Y-H-i-s', time());
		$filename = $folder . "ql-quancafe-keycodemon-" . $date . '.sql';
		
		$handle = fopen($filename, 'w+');
		fwrite($handle, ($return));
		fclose($handle);
		return $filename;
	}

	public function restoreData($fileName){
		$templine = '';
		$lines = file($fileName);
		$error = '';
		
		foreach ($lines as $line){
			if(substr($line, 0, 2) == '--' || $line == '') continue;
			$templine .= $line;
			if (substr(trim($line), -1, 1) == ';'){
				if(!mysqli_query($this->link, $templine)){
					$error .= 'Error performing query "<b>' . $templine . '</b>": ' . mysqli_error($this->link) . '<br /><br />';
				}
				$templine = '';
			}
		}
		return !empty($error) ? $error : true;
	}
}
