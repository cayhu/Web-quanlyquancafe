<?php
Session::checkSession();
?>

<?php

class Food
{
    private $db;
    private $fm;

    public function __construct()
    {
        $this->db = new Database();
        $this->fm = new Format();
    }

    public function getAllFoods()
    {
        $query = "SELECT food.*, foodCategory.`name` AS 'nameCategory' 
              FROM food 
              LEFT JOIN foodcategory ON food.`idCategory` = foodcategory.`id`";
        $result = $this->db->select($query);
        if (!$result) {
            echo "Lỗi truy vấn: Không có dữ liệu trả về.";
            return [];
        }

        $foodList = array();
        while ($row = mysqli_fetch_array($result)) {
            $food = new FoodViewModel(
                $row['id'],
                $row['name'],
                $row['idCategory'],
                $row['nameCategory'],
                $row['price'],
                $row['status']
            );
            array_push($foodList, $food);
        }

        return $foodList;
    }


    public function addFood($foodName, $categoryID, $foodPrice)
    {
        $query = "INSERT INTO food (`name`, `idCategory`, `price`) 
                      VALUES ('$foodName', $categoryID, $foodPrice)";

        $result = $this->db->insert($query);

        if ($result) {
            return true;
        }
        return false;
    }

    public function updateFood($foodID, $foodName, $categoryID, $foodPrice)
    {
        $query = "UPDATE food SET name = '$foodName', idCategory = $categoryID, price = $foodPrice WHERE id = $foodID";

        $result = $this->db->update($query);

        if ($result) {
            return true;
        }
        return false;
    }



    public function deleteFood($foodID)
    {
        $query = "DELETE FROM food WHERE id = $foodID";
        $result = $this->db->delete($query);

        if ($result) {
            return true;
        }
        return false;
    }

    // public function getFoodsByCategoryID($categoryID){
    //     $query = "CALL USP_LoadFoodListByCategoryID($categoryID)";
    //     $result = $this->db->procedure($query);

    //     $foodList = array();
    //     while ($row = mysqli_fetch_array($result)){
    //         $food = new FoodViewModel($row['ID'], $row['Tên món'], $row['Mã danh mục'], $row['Danh mục'], $row['Giá tiền'], $row['Trạng thái']);
    //         array_push($foodList, $food);
    //     }

    //     return $foodList;
    // }

    public function getFoodsByCategoryID($categoryID)
    {
        // Sử dụng câu truy vấn SQL với điều kiện categoryID = 0 lấy tất cả
        $query = "SELECT food.id, food.name AS 'foodName', food.idCategory AS 'idCategory', foodCategory.name AS 'categoryName', food.price, food.status
              FROM food
              JOIN foodCategory ON food.idCategory = foodCategory.id
              WHERE food.idCategory = $categoryID OR $categoryID = 0";  // Thêm điều kiện khi categoryID = 0

        $result = $this->db->select($query);

        $foodList = array();
        if ($result) {
            while ($row = mysqli_fetch_array($result)) {
                $food = new FoodViewModel(
                    $row['id'],
                    $row['foodName'],
                    $row['idCategory'],
                    $row['categoryName'],
                    $row['price'],
                    $row['status']
                );
                array_push($foodList, $food);
            }
        }

        return $foodList;
    }
}

?>