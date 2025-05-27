<?php
    Session::checkSession();
?>

<?php

    class Revenue{
        private $db;
        private $fm;

        public function __construct(){
            $this->db = new Database();
            $this->fm = new Format();
        }

        public function getAvgMonthRevenue() {
            //Doanh thu trung bình nhận được trong tháng
            $query = "SELECT TRUNCATE(SUM(totalPrice)/COUNT(*), 0) AS 'AVG Month Revenue' FROM Bill WHERE YEAR(timeIn) = YEAR(CURRENT_TIMESTAMP())";
            $result = $this->db->select($query);
        
            if ($row = mysqli_fetch_array($result)) {
                return $row['AVG Month Revenue'];
            }
            return 0;
        }
        

        public function getCurrentYearRevenue() {
            //Doanh thu năm hiện tại
            $query = "SELECT TRUNCATE(SUM(totalPrice), 0) AS 'Current Year Revenue' FROM Bill WHERE YEAR(timeIn) = YEAR(CURRENT_TIMESTAMP())";
            $result = $this->db->select($query);
        
            if ($row = mysqli_fetch_array($result)) {
                return $row['Current Year Revenue'];
            }
            return 0;
        }
        

        public function getAllMonthRevenues() {
            // Danh sách doanh thu trong tháng
            $query = "SELECT MONTH(timeIn) AS 'Month', TRUNCATE(SUM(totalPrice), 0) AS 'Month Revenue' 
                      FROM Bill 
                      WHERE YEAR(timeIn) = YEAR(CURRENT_TIMESTAMP()) 
                      GROUP BY MONTH(timeIn)
                      ORDER BY MONTH(timeIn)";
        
            $result = $this->db->select($query);
        
            $allMonthRevenues = array();
            while ($row = mysqli_fetch_array($result)) {
                $monthRevenue = array();
                $monthRevenue['Month'] = $row['Month'];
                $monthRevenue['Revenue'] = $row['Month Revenue'];
                
                array_push($allMonthRevenues, $monthRevenue);
            }
        
            return $allMonthRevenues;
        }
        

        public function getAllSourceRevenues() {
            // Danh sách các nguồn danh thu
            $query = "SELECT f.name AS 'Food', 
                             TRUNCATE(SUM(bi.count) / (SELECT SUM(count)
                                                       FROM BillInfo bi 
                                                       INNER JOIN Bill b ON bi.idBill = b.id
                                                       WHERE YEAR(b.timeIn) = YEAR(CURRENT_TIMESTAMP())) * 100, 2) AS 'Percent'
                      FROM BillInfo bi 
                      INNER JOIN Food f ON bi.idFood = f.id
                      INNER JOIN Bill b ON bi.idBill = b.id
                      WHERE YEAR(b.timeIn) = YEAR(CURRENT_TIMESTAMP())
                      GROUP BY bi.idFood
                      ORDER BY Percent DESC";
                      
            $result = $this->db->select($query);
        
            $allSourceRevenues = array();
            while ($row = mysqli_fetch_array($result)) {
                $sourceRevenue = array();
                $sourceRevenue['Food'] = $row['Food'];
                $sourceRevenue['Percent'] = $row['Percent'];
                
                array_push($allSourceRevenues, $sourceRevenue);
            }
        
            return $allSourceRevenues;
        }
        

        public function getAllBill()
        {
            // Danh sách hóa đơn
            $query = "SELECT 
                    CONCAT(b.timeIn, ' - ', t.name) AS timeInAndTableName, 
                    f.name AS foodName, 
                    fc.name AS categoryName, 
                    f.price, 
                    bi.count, 
                    b.discount, 
                    (f.price * bi.count * (1 - b.discount / 100)) AS totalPrice
                FROM 
                    Bill b 
                    INNER JOIN BillInfo bi ON b.id = bi.idBill
                    INNER JOIN TableFood t ON b.idTable = t.id
                    INNER JOIN Food f ON f.id = bi.idFood
                    INNER JOIN FoodCategory fc ON f.idCategory = fc.id";
    
            $result = $this->db->select($query);
    
            $allBill = array();
            while ($row = mysqli_fetch_array($result)) {
                $bill['timeInAndTableName'] = $row['timeInAndTableName'];
                $bill['foodName'] = $row['foodName'];
                $bill['categoryName'] = $row['categoryName'];
                $bill['price'] = $row['price'];
                $bill['count'] = $row['count'];
                $bill['discount'] = $row['discount'];
                $bill['totalPrice'] = $row['totalPrice'];
    
                array_push($allBill, $bill);
            }
    
            return $allBill;
        }

    }

?>