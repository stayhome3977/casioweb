
<title>Java script</title>
<script>
function Nhan()
{
	var a=document.getElementById("txtA").value;
	var b=document.getElementById("txtB").value;
	document.getElementById("txtKQ").value=a*b;
}
</script>
</head>
<body>
<p>Java script</p>
<p>Tác dụng: làm trang web linh hoạt + có tương tác</p>
<p>Các phép toán cơ bản</p>
<p>Phép nhân: <input type="text" id="txtA" name="T2" size="13">&nbsp; x&nbsp; 
<input type="text" id="txtB" name="T3" size="14">&nbsp;
<input type="button" value=" = " onclick="Nhan()" >
<input type="text" id="txtKQ" name="T6" size="16"> </p>

</body>