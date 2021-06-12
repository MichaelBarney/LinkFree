<!DOCTYPE html>

<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <title>Homer Simpson</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="favicon.ico" type="image/x-icon"/>
</head>

<body>
    <img id="userPhoto" src="https://i.imgur.com/t8ZX9um.jpg" alt="User Photo">
    
    <a href="https://www.instagram.com/thesimpsons" id="userName">@thesimpsons</a>

    <div id="main">

        <?php
            try{
                $ini_data = parse_ini_file("config.ini", true);
                foreach(array_keys($ini_data) as $key){
                    if(strpos($key, "Option") !== false){
                        echo "<a class=\"item\" href=\"{$ini_data[$key]['Link']}\" target=\"_blank\">{$ini_data[$key]['Name']}</a>";
                    }
                }
            } 
            catch(error $e){
                echo '<p>An error occured while parsing the INI-File</p>';
            }
        ?>

        <button class="button navigation" type="button" onclick="location.href='admin.php'">Edit</button>
    </div>

    <!-- Javascript -->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
    <script src="index.js"></script>
</body>
</html>