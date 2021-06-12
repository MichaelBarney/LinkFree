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
        <form method="post" action="submit.php">
            <div id="items">    

                <?php
                    try{
                        $ini_data = parse_ini_file("config.ini", true);
                        $fieldCounter = 0;
                        foreach(array_keys($ini_data) as $key){
                            if(strpos($key, "Option") !== false){
                                $fieldCounter++;
                                echo <<< EOT
                                    <div class="item edit">
                                        <div class="parameter">
                                            <label class="label" for="name$fieldCounter">Name:</label><br>
                                            <input class="button input" type="text" name="name$fieldCounter" id="name$fieldCounter" value="{$ini_data[$key]['Name']}">
                                        </div>
                                        <div class="parameter">
                                            <label class="label" for="link$fieldCounter">Link:</label><br>
                                            <input class="button input" type="text" name="link$fieldCounter" id="link$fieldCounter" value="{$ini_data[$key]['Link']}">
                                        </div>
                                        <div class="parameter edit_buttons">
                                            <button class="button delete" type="button" onclick="deleteItem($( this ))">Delete</button>
                                        </div>
                                        <div class="parameter edit_buttons">
                                            <button class="button move up" type="button" onclick="moveItemUp($( this ))">Up</button><br>
                                            <button class="button move down" type="button" onclick="moveItemDown($( this ))">Down</button>
                                        </div>
                                    </div>
                                EOT;
                            }
                        }
                    } 
                    catch(error $e){
                        echo '<p>An error occured while parsing the INI-File</p>';
                    }
                ?>

            </div>

            <!-- Template for Javascript-->
            <div class="item edit" id="template_div" style="display: none">
                <div class="parameter">
                    <label class="label" for="name">Name:</label><br>
                    <input class="button input" type="text" name="name" id="name">
                </div>
                <div class="parameter">
                    <label class="label" for="link">Link:</label><br>
                    <input class="button input" type="text" name="link" id="link">
                </div>
                <div class="parameter edit_buttons">
                    <button class="button delete" type="button" onclick="deleteItem($( this ))">Delete</button>
                </div>
                <div class="parameter edit_buttons">
                    <button class="button move up" type="button" onclick="moveItemUp($( this ))">Up</button><br>
                    <button class="button move down" type="button" onclick="moveItemDown($( this ))">Down</button>
                </div>
            </div>
        
            <div id="buttons">
                <button class="button navigation" type="button" onclick="location.href='index.php'">Go back</button>
                <button class="button navigation" type="button" id="moreFields">Add field</button>
	            <button class="button navigation" type="submit">Save</button>
            </div>
        </form>
    </div>

    <!-- Javascript -->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
    <script src="admin.js"></script>
</body>
</html>