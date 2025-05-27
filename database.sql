-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 11, 2025 lúc 12:29 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `ql_quancafe`
--

DELIMITER $$
--
-- Thủ tục
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_AddAccount` (IN `username` VARCHAR(100), IN `displayName` VARCHAR(100) CHARSET utf8, IN `typeID` INT, IN `gender` VARCHAR(5) CHARSET utf8, IN `birthday` DATE, IN `address` VARCHAR(100) CHARSET utf8)   INSERT INTO Account
    (username, displayName, typeID, gender, birthday, address)
    VALUES
    (username, displayName, typeID, gender, birthday, address)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_AddFood` (IN `foodName` VARCHAR(100) CHARSET utf8, IN `idCategory` INT, IN `price` FLOAT)   INSERT INTO Food(name, idCategory, price) VALUES(foodName, idCategory, price)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_AddFoodCategory` (IN `categoryName` VARCHAR(100) CHARSET utf8)   INSERT INTO FoodCategory(name)
	VALUES(categoryName)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_AddFoodToTable` (IN `foodID` INT, IN `count` INT, IN `tableID` INT)   BEGIN
	DECLARE billID INT DEFAULT 0;
    DECLARE numberOfFoodNameOnTable INT DEFAULT 0;
	DECLARE existFood INT DEFAULT 0;
	DECLARE rest INT DEFAULT 0;
    DECLARE existFoodOnTable INT DEFAULT 0;
    DECLARE existBillID INT DEFAULT 0;

	SELECT id
	INTO billID
	FROM Bill
	WHERE idTable = tableID AND status = N'Chưa thanh toán'
	LIMIT 1;

	SELECT COUNT(*)
	INTO numberOfFoodNameOnTable
	FROM BillInfo
	WHERE idBill = billID;

	SELECT COUNT(*)
	INTO existFood
	FROM BillInfo
	WHERE idBill = billID AND idFood = foodID;

	IF numberOfFoodNameOnTable > 0 THEN
        
		IF existFood > 0 THEN

			SET rest = 0;

			SELECT bi.count + count
			INTO rest
			FROM BillInfo bi
			WHERE idBill = billID AND idFood = foodID
			LIMIT 1;

			IF rest <= 0 THEN
				DELETE FROM BillInfo
				WHERE idBill = billID AND idFood = foodID;
                
                SELECT COUNT(*)
				INTO existFoodOnTable
				FROM BillInfo
				WHERE idBill = billID;
				
				IF existFoodOnTable = 0 THEN
					UPDATE TableFood
					SET status = N'Trống'
					WHERE id = tableID;
				END IF;
                
			ELSE
				UPDATE BillInfo
				SET count = rest
				WHERE idBill = billID AND idFood = foodID;
			END IF;

		ELSEIF count > 0 THEN

			INSERT INTO BillInfo(idBill, idFood, count)
			VALUES(billID, foodID, count);

		END IF;

	ELSEIF count > 0 THEN
	
		SELECT id
        INTO existBillID
        FROM Bill
        WHERE id = billID;
        
        IF existBillID = 0 THEN
			INSERT INTO Bill(idTable) VALUES (tableID);

			SELECT MAX(id)
			INTO billID
			FROM Bill;
		END IF;

		INSERT INTO BillInfo(idBill, idFood, count)
		VALUES(billID, foodID, count);

	END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_AddTableFood` (IN `tableName` VARCHAR(100) CHARSET utf8)   INSERT INTO TableFood
    (name) VALUES(tableName)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_ChangeAccountInfo` (IN `username` VARCHAR(100), IN `displayName` VARCHAR(100) CHARSET utf8, IN `gender` VARCHAR(5) CHARSET utf8, IN `birthday` DATE, IN `address` VARCHAR(100) CHARSET utf8)   UPDATE Account
	SET Account.displayName = displayName, Account.gender = gender, Account.birthday = birthday, Account.address = address
	WHERE Account.username = username$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_ChangePassword` (IN `username` VARCHAR(100), IN `newPass` VARCHAR(100))   UPDATE Account
	SET password = newPass
	WHERE Account.username = username$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_ChangeTable` (IN `firstTableID` INT, IN `secondTableID` INT)   BEGIN
	DECLARE oldBillID INT;
    DECLARE newBillID int;
	
	SELECT id
	INTO oldBillID
	FROM Bill
	WHERE idTable = firstTableID AND status = N'Chưa thanh toán';

	SELECT id
	INTO newBillID
	FROM Bill
	WHERE idTable = secondTableID AND status = N'Chưa thanh toán';

	IF newBillID IS NULL THEN
	    INSERT INTO Bill(idTable) VALUES (secondTableID);
		
		SELECT newBillID = MAX(id)
		FROM Bill;
	END IF;

	UPDATE BillInfo
	SET idBill = newBillID
	WHERE idBill = oldBillID;

	UPDATE TableFood
	SET status = N'Trống'
	WHERE id = firstTableID;

	UPDATE TableFood
	SET status = N'Đã có người'
	WHERE id = secondTableID;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_CheckoutTable` (IN `tableID` INT, IN `discount` INT)   BEGIN
    DECLARE billID INT;
	DECLARE totalPrice FLOAT;
	
	SELECT id
	INTO billID
	FROM Bill
	WHERE idTable = tableID AND status = N'Chưa thanh toán';

	SELECT sum(price*count) as totalPrice
	INTO totalPrice
	FROM BillInfo bi INNER JOIN Food f ON bi.idFood = f.id
	WHERE idBill = billID;

	UPDATE Bill
	SET timeOut = CURRENT_TIMESTAMP(), Bill.totalPrice = totalPrice, Bill.discount = discount, status = N'Đã thanh toán'
	WHERE id = billID;

	UPDATE TableFood
	SET status = N'Trống'
	WHERE id = tableID;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_DeleteAccount` (`username` VARCHAR(100))   DELETE FROM Account
	WHERE Account.username = username$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_DeleteFood` (IN `idFood` INT)   BEGIN
	DELETE FROM Food WHERE id = idFood; 
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_DeleteFoodCategory` (`idFC` INT)   DELETE FROM FoodCategory WHERE id = idFC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_DeleteTableFood` (IN `tableID` INT)   DELETE FROM TableFood
	WHERE id = tableID$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_ExistAccount` (IN `username` VARCHAR(100))   SELECT *
	FROM Account
	WHERE username = username$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_ExistCategory` (IN `categoryName` VARCHAR(100) CHARSET utf8)   SELECT *
	FROM FoodCategory
	WHERE Name = categoryName$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_ExistFood` (IN `foodName` VARCHAR(100) CHARSET utf8)   SELECT * FROM Food where name = foodName$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_ExistTableFood` (IN `tableName` VARCHAR(100) CHARSET utf8)   SELECT *
	FROM TableFood
	WHERE name = tableName$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_FoodWasUsing` (IN `foodID` INT)   SELECT id FROM BillInfo WHERE idFood = foodID$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_GetAccountInfoByUsername` (IN `username` VARCHAR(100))   SELECT username, displayName, t.id, t.name, gender, birthday, address
    FROM Account a INNER JOIN AccountType t ON t.id = a.typeID
	WHERE a.username = username$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_GetAllBill` ()   BEGIN
		SELECT CONCAT(b.timeIn, " - ", t.name) 'timeInAndTableName', f.name 'foodName', fc.name 'categoryName', f.price, bi.count, b.discount, (f.price*bi.count*(1-b.discount/100)) 'totalPrice'
		FROM Bill b INNER JOIN BillInfo bi ON b.id = bi.idBill
					INNER JOIN TableFood t ON b.idTable = t.id
					INNER JOIN Food f ON f.id = bi.idBill
					INNER JOIN FoodCategory fc ON f.idCategory = fc.id;
	END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_GetAllMonthRevenues` ()   SELECT MONTH(timeIn) AS 'Month', TRUNCATE(SUM(totalPrice),0) AS 'Month Revenue'
	FROM Bill
	WHERE YEAR(timeIn) = YEAR(CURRENT_TIMESTAMP())
	GROUP BY MONTH(timeIn)
    ORDER BY timeIn$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_GetAllSourceRevenues` ()   BEGIN
		DECLARE allFoodCount INT DEFAULT 0;
		SELECT SUM(count)
		INTO allFoodCount
		FROM BillInfo bi INNER JOIN Bill b ON bi.idBill = b.id
		WHERE YEAR(b.timeIn) = YEAR(CURRENT_TIMESTAMP());

		SELECT f.name AS 'Food', TRUNCATE(SUM(count)/allFoodCount*100, 2) AS 'Percent'
		FROM BillInfo bi INNER JOIN Food f ON bi.idFood = f.id
        					INNER JOIN Bill b ON bi.idBill = b.id
        WHERE YEAR(timeIn) = YEAR(CURRENT_TIMESTAMP())
		GROUP BY idFood
		ORDER BY Percent DESC;
	END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_GetAvgMonthRevenue` ()   SELECT TRUNCATE(SUM(totalPrice)/COUNT(*),0) AS 'AVG Month Revenue'
	FROM Bill
	WHERE YEAR(timeIn) = YEAR(CURRENT_TIMESTAMP())$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_GetBillByTableID` (IN `idTable` INT)   SELECT f.name, bi.count, f.price, (f.price * count) as totalPrice
	FROM Food f INNER JOIN BillInfo bi ON bi.idFood = f.id
					INNER JOIN Bill b ON b.id = bi.idBill
	WHERE b.idTable = idTable AND b.status = N'Chưa thanh toán'$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_GetBillUnCheckOutByTableID` (IN `idTable` INT)   SELECT * FROM Bill
	WHERE status = N'Chưa thanh toán' AND idTable = idTable$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_GetCurrentYearRevenue` ()   SELECT TRUNCATE(SUM(totalPrice),0) AS 'Current Year Revenue'
	FROM Bill
	WHERE YEAR(timeIn) = YEAR(CURRENT_TIMESTAMP())$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_GetListBillCheckedOutByDate` (IN `fromDate` DATETIME, IN `toDate` DATETIME)   BEGIN
    SELECT name 'Tên bàn', DATE_FORMAT(timeIn, '%Y-%m-%d %T') 'Thời gian vào', DATE_FORMAT(timeOut, '%Y-%m-%d %T') 'Thời gian ra', totalPrice 'Tổng hóa đơn', discount 'Giảm giá'
	FROM Bill INNER JOIN TableFood ON TableFood.id = Bill.idTable
	WHERE Bill.status = N'Đã thanh toán' AND timeOut >= fromDate AND timeOut <= toDate + 1;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_GetListBillCheckedOutByDateAndPage` (IN `fromDate` DATETIME, IN `toDate` DATETIME, IN `page` INT, IN `rowsPerPage` INT)   BEGIN
    SET page = page*rowsPerPage;
    SELECT name 'Tên bàn', DATE_FORMAT(timeIn, '%Y-%m-%d %T') 'Thời gian vào', DATE_FORMAT(timeOut, '%Y-%m-%d %T') 'Thời gian ra', totalPrice 'Tổng hóa đơn', discount 'Giảm giá'
	FROM Bill INNER JOIN TableFood ON TableFood.id = Bill.idTable
	WHERE Bill.status = N'Đã thanh toán' AND timeOut >= fromDate AND timeOut <= toDate + 1
	LIMIT rowsPerPage, page;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_GetMaxPageOfListBillCheckedOutByDate` (IN `fromDate` DATETIME, IN `toDate` DATETIME)   SELECT COUNT(*)
	FROM Bill INNER JOIN TableFood ON TableFood.id = Bill.idTable
	WHERE Bill.status = N'Đã thanh toán' AND timeOut >= fromDate AND timeOut <= toDate + 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_LoadAccountList` ()   SELECT username, displayName, t.id, t.name, gender, birthday, address
    FROM Account a INNER JOIN AccountType t ON t.id = a.typeID$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_LoadAccountTypeList` ()   SELECT *
	FROM AccountType$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_LoadFoodCategoryList` ()   SELECT * FROM FoodCategory$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_LoadFoodList` ()   SELECT f.id 'ID', f.name 'Tên món', fc.id 'Mã danh mục', fc.name 'Danh mục', price 'Giá tiền', status 'Trạng thái'
    FROM Food f INNER JOIN FoodCategory fc ON fc.id = f.idCategory$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_LoadFoodListByCategoryID` (IN `categoryID` INT)   BEGIN
	IF categoryID = 0 THEN
		SELECT f.id 'ID', f.name 'Tên món', fc.id 'Mã danh mục', fc.name 'Danh mục', price 'Giá tiền', status 'Trạng thái'
		FROM Food f INNER JOIN FoodCategory fc ON fc.id = f.idCategory;
	ELSE
		SELECT f.id 'ID', f.name 'Tên món', fc.id 'Mã danh mục', fc.name 'Danh mục', price 'Giá tiền', status 'Trạng thái'
		FROM Food f INNER JOIN FoodCategory fc ON fc.id = f.idCategory
		WHERE fc.id = categoryID;
	END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_LoadStateList` ()   SELECT * FROM State$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_LoadTableList` ()   SELECT * FROM TableFood$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_LoadTableStatusByID` (IN `tableID` INT)   SELECT id, name, status
	FROM TableFood
	WHERE id = tableID$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_LoadTableStatusList` ()   SELECT DISTINCT(status) FROM TableFood$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_Login` (`username` VARCHAR(100), `password` VARCHAR(100))   SELECT *
	FROM Account ac INNER JOIN AccountType act ON ac.typeID = act.id
	WHERE ac.username = username AND ac.password = password LIMIT 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_ResetPassword` (`username` VARCHAR(100))   UPDATE Account
	SET password = 'c4ca4238a0b923820dcc509a6f75849b'
	WHERE Account.username = username$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_SearchFood` (IN `text` VARCHAR(100) CHARSET utf8)   SELECT f.id 'ID', f.name 'Tên món', fc.name 'Loại món', price 'Giá tiền'
	FROM Food f INNER JOIN FoodCategory fc ON fc.id = f.idCategory
	WHERE fuConvertToUnsign(f.name) LIKE fuConvertToUnsign(text)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_UpdateAccount` (IN `username` VARCHAR(100), IN `displayName` VARCHAR(100) CHARSET utf8, IN `typeID` INT, IN `gender` VARCHAR(5) CHARSET utf8, IN `birthday` DATE, IN `address` VARCHAR(100) CHARSET utf8)   UPDATE Account
	SET Account.displayName = displayName, Account.typeID = typeID, Account.gender = gender, Account.birthday = birthday, Account.address = address
	WHERE Account.username = username$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_UpdateFood` (IN `idFood` INT, IN `foodName` VARCHAR(100) CHARSET utf8, IN `idCategory` INT, IN `foodPrice` FLOAT)   UPDATE Food
	SET name = foodName, idCategory = idCategory, price = foodPrice
	WHERE id = idFood$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_UpdateFoodCategory` (IN `idFC` INT, IN `categoryName` VARCHAR(100) CHARSET utf8)   UPDATE FoodCategory SET name = categoryName
	WHERE id = idFC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_UpdateTableFood` (IN `tableID` INT, IN `tableName` VARCHAR(100) CHARSET utf8)   UPDATE TableFood
	SET name = tableName
	WHERE id = tableID$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `username` varchar(100) NOT NULL,
  `password` varchar(1000) NOT NULL DEFAULT 'c4ca4238a0b923820dcc509a6f75849b',
  `displayName` varchar(100) NOT NULL,
  `typeID` int(11) NOT NULL DEFAULT 2,
  `gender` varchar(5) NOT NULL DEFAULT 'Nam',
  `birthday` date NOT NULL,
  `address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`username`, `password`, `displayName`, `typeID`, `gender`, `birthday`, `address`) VALUES
('admin', '21232f297a57a5a743894a0e4a801fc3', 'ADMIN', 1, 'Nam', '2003-01-01', 'Hà Nội'),
('dat', '202cb962ac59075b964b07152d234b70', 'Ngô Tiến Đạt', 2, 'Nam', '1999-09-27', 'Hà Nội');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `accounttype`
--

CREATE TABLE `accounttype` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `accounttype`
--

INSERT INTO `accounttype` (`id`, `name`) VALUES
(1, 'Quản trị viên'),
(2, 'Nhân viên');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bill`
--

CREATE TABLE `bill` (
  `id` int(11) NOT NULL,
  `idTable` int(11) NOT NULL,
  `totalPrice` float NOT NULL DEFAULT 0,
  `discount` int(11) NOT NULL DEFAULT 0,
  `timeIn` datetime NOT NULL DEFAULT current_timestamp(),
  `timeOut` datetime DEFAULT NULL,
  `status` varchar(100) NOT NULL DEFAULT 'Chưa thanh toán'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `bill`
--

INSERT INTO `bill` (`id`, `idTable`, `totalPrice`, `discount`, `timeIn`, `timeOut`, `status`) VALUES
(1, 1, 104000, 10, '2025-05-11 05:01:28', '2025-05-11 05:19:13', 'Đã thanh toán');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `billinfo`
--

CREATE TABLE `billinfo` (
  `id` int(11) NOT NULL,
  `idBill` int(11) NOT NULL,
  `idFood` int(11) NOT NULL,
  `count` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `billinfo`
--

INSERT INTO `billinfo` (`id`, `idBill`, `idFood`, `count`) VALUES
(2, 1, 34, 1),
(3, 1, 37, 1),
(4, 1, 24, 1),
(5, 1, 25, 1);

--
-- Bẫy `billinfo`
--
DELIMITER $$
CREATE TRIGGER `UTG_UpdateBillInfo` AFTER INSERT ON `billinfo` FOR EACH ROW BEGIN
    DECLARE billID INT DEFAULT 0;
	DECLARE tableID INT;
	DECLARE numberFoodToCheckDuplicate INT;
	DECLARE duplicateFood INT;
    DECLARE idFoodInserted INT;
	DECLARE firstDuplicateID INT;
    DECLARE secondDuplicateID INT;
    DECLARE existFoodOnTable INT DEFAULT 0;

	SET billID = IF(NEW.idBill>0, NEW.idBill, 0);

	UPDATE Bill
	SET status = N'Chưa thanh toán'
	WHERE id = billID;

	SELECT idTable
	INTO tableID
	FROM Bill
	WHERE id = billID
	LIMIT 1;

	UPDATE TableFood
	SET status = N'Đã có người'
	WHERE id = tableID;

	SELECT COUNT(*)
	INTO existFoodOnTable
	FROM BillInfo
	WHERE idBill = billID;
    
	IF existFoodOnTable = 0 THEN
	    UPDATE TableFood
		SET status = N'Trống'
		WHERE id = tableID;
	END IF;
    
	SET numberFoodToCheckDuplicate = IF(NEW.idBill>0, 1, 0);

	WHILE (numberFoodToCheckDuplicate > 0) DO
		SET idFoodInserted = IF(NEW.idFood>0, NEW.idFood, 0);

		SELECT COUNT(*)
		INTO duplicateFood
		FROM BillInfo
		WHERE idBill = billID AND idFood = idFoodInserted;

		IF duplicateFood>1 THEN
			SELECT MIN(id)
			INTO firstDuplicateID
			FROM BillInfo
			WHERE idBill = billID AND idFood = idFoodInserted;

			SELECT MAX(id)
			INTO secondDuplicateID
			FROM BillInfo
			WHERE idBill = billID AND idFood = idFoodInserted;

			UPDATE BillInfo
			SET count = count + (SELECT count FROM BillInfo WHERE id = secondDuplicateID)
			WHERE id = firstDuplicateID;

			DELETE FROM BillInfo
			WHERE id = secondDuplicateID;
		END IF;

		SET numberFoodToCheckDuplicate = numberFoodToCheckDuplicate - 1;
	END WHILE;
    
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `food`
--

CREATE TABLE `food` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `idCategory` int(11) NOT NULL,
  `price` float NOT NULL DEFAULT 0,
  `status` varchar(50) NOT NULL DEFAULT 'Sử dụng'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `food`
--

INSERT INTO `food` (`id`, `name`, `idCategory`, `price`, `status`) VALUES
(20, 'Cafe Đen', 7, 15000, 'Sử dụng'),
(21, 'Cafe Sữa', 7, 18000, 'Sử dụng'),
(22, 'Bạc Xỉu', 7, 20000, 'Sử dụng'),
(23, 'Sữa tươi trân châu đường đen', 7, 20000, 'Sử dụng'),
(24, 'Trà sữa dâu', 7, 20000, 'Sử dụng'),
(25, 'Trà sữa truyền thống', 7, 20000, 'Sử dụng'),
(26, 'Trà đào sả', 7, 20000, 'Sử dụng'),
(27, 'Trà sữa vani', 7, 20000, 'Sử dụng'),
(28, 'Chocolate sữa tươi trân châu đường đen', 7, 20000, 'Sử dụng'),
(29, 'Matcha sữa tươi trân châu đường đen', 7, 20000, 'Sử dụng'),
(30, 'Combo 1', 5, 99000, 'Sử dụng'),
(31, 'Combo 2', 5, 79000, 'Sử dụng'),
(32, 'Combo 3', 5, 59000, 'Sử dụng'),
(33, 'Combo 4', 5, 49000, 'Sử dụng'),
(34, 'Combo 5', 5, 39000, 'Sử dụng'),
(35, 'Khoai tây chiên', 6, 25000, 'Sử dụng'),
(36, 'Xúc xích phô mai', 6, 25000, 'Sử dụng'),
(37, 'Gà viên chiên', 6, 25000, 'Sử dụng'),
(38, 'Mỳ Cay', 6, 25000, 'Sử dụng'),
(39, 'Bánh Tráng trộn', 6, 25000, 'Sử dụng');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `foodcategory`
--

CREATE TABLE `foodcategory` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `foodcategory`
--

INSERT INTO `foodcategory` (`id`, `name`) VALUES
(5, 'Combo'),
(6, 'Đồ Ăn'),
(7, 'Đồ Uống');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tablefood`
--

CREATE TABLE `tablefood` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL DEFAULT 'Trống'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `tablefood`
--

INSERT INTO `tablefood` (`id`, `name`, `status`) VALUES
(1, 'Bàn số 1', 'Trống'),
(2, 'Bàn số 2', 'Trống'),
(3, 'Bàn số 3', 'Trống'),
(4, 'Bàn số 4', 'Trống'),
(5, 'Bàn số 5', 'Trống'),
(6, 'Bàn số 6', 'Trống'),
(7, 'Bàn số 7', 'Trống'),
(8, 'Bàn số 8', 'Trống'),
(9, 'Bàn số 9', 'Trống'),
(10, 'Bàn số 10', 'Trống'),
(11, 'Bàn số 11', 'Trống'),
(12, 'Bàn số 12', 'Trống'),
(13, 'Bàn số 13', 'Trống'),
(14, 'Bàn số 14', 'Trống'),
(15, 'Bàn số 15', 'Trống'),
(16, 'Bàn số 16', 'Trống'),
(17, 'Bàn số 17', 'Trống'),
(18, 'Bàn số 18', 'Trống'),
(19, 'Bàn số 19', 'Trống'),
(20, 'Bàn số 20', 'Trống');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`username`),
  ADD KEY `typeID` (`typeID`);

--
-- Chỉ mục cho bảng `accounttype`
--
ALTER TABLE `accounttype`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTable` (`idTable`);

--
-- Chỉ mục cho bảng `billinfo`
--
ALTER TABLE `billinfo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idBill` (`idBill`),
  ADD KEY `idFood` (`idFood`);

--
-- Chỉ mục cho bảng `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCategory` (`idCategory`);

--
-- Chỉ mục cho bảng `foodcategory`
--
ALTER TABLE `foodcategory`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tablefood`
--
ALTER TABLE `tablefood`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `accounttype`
--
ALTER TABLE `accounttype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `bill`
--
ALTER TABLE `bill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `billinfo`
--
ALTER TABLE `billinfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `food`
--
ALTER TABLE `food`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT cho bảng `foodcategory`
--
ALTER TABLE `foodcategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `tablefood`
--
ALTER TABLE `tablefood`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `account`
--
ALTER TABLE `account`
  ADD CONSTRAINT `account_ibfk_1` FOREIGN KEY (`typeID`) REFERENCES `accounttype` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `bill`
--
ALTER TABLE `bill`
  ADD CONSTRAINT `bill_ibfk_1` FOREIGN KEY (`idTable`) REFERENCES `tablefood` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `billinfo`
--
ALTER TABLE `billinfo`
  ADD CONSTRAINT `billinfo_ibfk_1` FOREIGN KEY (`idBill`) REFERENCES `bill` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `billinfo_ibfk_2` FOREIGN KEY (`idFood`) REFERENCES `food` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `food`
--
ALTER TABLE `food`
  ADD CONSTRAINT `food_ibfk_1` FOREIGN KEY (`idCategory`) REFERENCES `foodcategory` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
