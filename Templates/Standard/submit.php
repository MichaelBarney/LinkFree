<!DOCTYPE html>
<html>
    <body>
        <?php
            //echo '<pre>'; print_r($_POST); echo '</pre>';
            $iniCounter = 0;
            $ini_data = array();
            foreach(array_keys($_POST) as $key){
                if(strpos($key, "name") !== false && !empty($_POST[$key])){
                    $position = str_replace("name", "", $key);
                    if(!empty($_POST["link$position"])){
                        $iniCounter++;
                        $ini_data["Option$iniCounter"] = array("Name" => "{$_POST["name$position"]}", "Link" => "{$_POST["link$position"]}");
                        //echo '<pre>'; print_r($ini_data); echo '</pre>';
                    }
                }
            }
            write_php_ini($ini_data, "config.ini");
            header("Location: index.php");

            function write_php_ini($array, $file)
            {
                $res = array();
                foreach($array as $key => $val)
                {
                    if(is_array($val))
                    {
                        $res[] = "[$key]";
                        foreach($val as $skey => $sval) $res[] = "$skey = ".(is_numeric($sval) ? $sval : '"'.$sval.'"');
                    }
                    else $res[] = "$key = ".(is_numeric($val) ? $val : '"'.$val.'"');
                }
                $ini_file = fopen($file, "w") or die("Unable to open file!");
                fwrite($ini_file, implode("\r\n", $res));
                fclose($ini_file);
            }
        ?>

    </body>
</html>