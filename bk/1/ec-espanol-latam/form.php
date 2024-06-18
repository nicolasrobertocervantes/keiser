<?php
header('Content-Type: text/html; charset=utf-8');
error_reporting(E_ALL ^ E_NOTICE);

foreach($_GET as $id=>$val){
	$_GET[$id] = htmlspecialchars($val);
}
?>

<div id="form-container" class="sidebar">
    <h1 style="font-size:29px;">Solicitud de Informaci&oacute;n</h1>
    <div id="loading-image"></div><!-- / #loading-image -->

    <form name="Form1" id="Form1" method="post" action="thankyou.php">
      <input type="hidden" value="" name="glue_id" id="glueId">
      <input type="hidden" value="" name="affiliate_id" id="affiliateId">
    <div id="form-step-1">
      <select name="program" id="program" size="1">
        <option value="" selected="selected">Programa de Inter&eacute;s*</option>
        <option value="AAACS">Asociado en Artes en Contabilidad</option>
        <option value="ASMBCSP">Asociado en Codificación y Facturación Administrativa Médica</option>
        <option value="ASMASP">Asociado en Ciencias de Asistencia Médica</option>
        <option value="ASMASP">(Miami Campus) Asociado en Ciencias de Asistencia Médica</option>
        <option value="AAGSS">Asociado en Artes en Estudios Generales</option>
        <option value="AAHSAS">Asociado en Artes en Administración de Servicios de Salud</option>
        <option value="ASITS">Asociado de Ciencias en Tecnología de la Información</option>
        <option value="BAHSAS">Licenciatura en Administración de Servicios de Salud</option>
        <option value="BABAS">Licenciatura en Administración de Empresas</option>
        <option value="BABASMKT">Licenciatura en Administración de Empresas con especialización en Mercadeo</option>
        <option value="BABASE">Licenciatura en Administración de Empresas con especialización en Emprendimiento</option>
        <option value="BABASFIN">Licenciatura en Administración de Empresas con especialización en Finanzas</option>
        <option value="BABASMAN">Licenciatura en Administración de Empresas con especialización en Gerencia</option>
        <option value="BABASMAN">(Miami Campus) Licenciatura en Administración de Empresas con especialización en Gerencia</option>
        <option value="BABASIBT">Licenciatura en Administración de Empresas con especialización en Negocios Internacionales</option>
        <option value="BABASHR">Licenciatura en Administración de Empresas con especialización en Recursos Humanos</option>
        <option value="BAASP">Licenciatura en Contabilidad</option>
        <option value="BSISS">Licenciatura en Ciencias Interdisciplinarias</option>
        <option value="BAPSYCS">Licenciatura en Psicología</option>
        <option value="BSITMSP">Licenciatura en Ciencias en Gestión de Tecnologías de la Información</option>
        <option value="MSMS">Maestría en Ciencias Gerenciales</option>
        <option value="MBAS">Maestría en Administración de Empresas (MBA)</option>
        <option value="MBASI">Maestría en Administración de Empresas (MBA) - Global</option>
        <option value="MBASM">Maestría en Administración de Empresas (MBA) - Gerencial</option>
        <option value="MBAMKTSP">Maestría en Administración de Empresas (MBA) - Marketing</option>
        <option value="MBASHSA">Maestría en Administración de Empresas (MBA) - Servicios de Salud</option>
        <option value="MSELS">Maestría en Ciencias de Liderazgo en Educación</option>
        <option value="MSPSYSP">Maestría en Ciencias en Psicología</option>
        <option value="MSOLSP">Maestría en Ciencias en Liderazgo Organizacional</option>
        <option value="DBAS">Doctorado en Administración de Negocios o Gestión Global</option>
        <option value="DPELS">Doctorado en Filosofía de Liderazgo en Educación</option>
        <option value="PHDPSP">Doctorado en Filosofía en Psicología</option>
        <option value="PHDPIOPS">Doctorado en Filosofía en Psicología Industrial y Organizacional</option>
        <option value="ESOL">ESOL - Inglés como Segundo Idioma</option>
      </select>

      <select name="ed_level" id="ed_level">
        <option value="" selected="selected">Educaci&oacute;n*</option>
        <option value="High School Graduate">High School Graduate/GED</option>
				<option value="Current High School Senior">Current High School Senior</option>
				<option value="Current High School Junior">Current High School Junior</option>
        <option value="Some University">Alguna Universidad</option>
        <option value="University Graduate">Diploma Universitario</option>
        <option value="Bachelors">Licenciatura</option>
        <option value="Master's">Maestría</option>
      </select>

      <select name="gradyear_sel" id="gradyear_sel">
        <option value="" selected="selected">A&ntilde;o de Graduaci&oacute;n de Secundaria</option>
        <option value="2022">2024</option>
        <option value="2021">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
        <option value="2011">2011</option>
        <option value="2010">2010</option>
        <option value="2009">2009</option>
        <option value="2008">2008</option>
        <option value="2007">2007</option>
        <option value="2006">2006</option>
        <option value="2005">2005</option>
        <option value="2004">2004</option>
        <option value="2003">2003</option>
        <option value="2002">2002</option>
        <option value="2001">2001</option>
        <option value="2000">2000</option>
        <option value="1999">1999</option>
        <option value="1998">1998</option>
        <option value="1997">1997</option>
        <option value="1996">1996</option>
        <option value="1995">1995</option>
        <option value="1994">1994</option>
        <option value="1993">1993</option>
        <option value="1992">1992</option>
        <option value="1991">1991</option>
        <option value="1990">1990</option>
        <option value="1989">1989</option>
        <option value="1988">1988</option>
        <option value="1987">1987</option>
        <option value="1986">1986</option>
        <option value="1985">1985</option>
        <option value="1984">1984</option>
        <option value="1983">1983</option>
        <option value="1982">1982</option>
        <option value="1981">1981</option>
        <option value="1980">1980</option>
        <option value="1979">1979</option>
        <option value="1978">1978</option>
        <option value="1977">1977</option>
        <option value="1976">1976</option>
        <option value="1975">1975</option>
        <option value="1974">1974</option>
        <option value="1973">1973</option>
        <option value="1972">1972</option>
        <option value="1971">1971</option>
        <option value="1970">1970</option>
        <option value="1969">1969</option>
        <option value="1968">1968</option>
        <option value="1967">1967</option>
        <option value="1966">1966</option>
        <option value="1965">1965</option>
        <option value="1964">1964</option>
        <option value="1963">1963</option>
        <option value="1962">1962</option>
        <option value="1961">1961</option>
        <option value="1960">1960</option>
      </select>

      <input class="half l" value="<?php echo $_GET['fname']; ?>" name="fname" id="fname" type="text" placeholder="Primer Nombre*">
      <input class="half r" value="<?php echo $_GET['lname']; ?>" name="lname" id="lname" type="text" placeholder="Apellido*">
      <input class="full l" value="<?php echo $_GET['email']; ?>" name="email" id="email" type="text" placeholder="Correo electrónico*">

      <div style="font-size:14px; margin-bottom:20px;">
      	<small>*Indica secci&oacute;n obligatoria.</small>
      </div>

      <div class="clear"></div>
      <a id="continue-button" href="#" onclick="validateOne()"></a>
      <div id="non-profit-indicator">
        <small>Keiser University es una instituci&oacute;n<br>privada sin fines de lucro</small>
      </div>
      <div class="privacy-policy"><strong>¡Tu informaci&oacute;n est&aacute; segura!</strong><br>
        <a href="http://www.keiseruniversity.edu/politica_de_privacidad.htm" target="_blank">Conoce nuestra Pol&iacute;tica de Privacidad.</a></div>
    </div><!-- / #form-step-1 -->

    <div id="form-step-2">
      <a id="back-button" href="#" onclick="showStepOne()"></a>
      <input class="half l" value="" name="address1" id="address1" type="text" placeholder="Direcci&oacute;n" style="width:60%;">
      <input class="half r" value="" name="zip" id="zip" type="text" placeholder="Código Postal" style="width:30%;">

      <select name="country" id="country">
      	<option value="" selected="selected">Pa&iacute;s de Residencia*</option>
        <option value="US">Estados Unidos de América</option>
        <option value="AF">Afganistán</option>
        <option value="AL">Albania</option>
        <option value="DE">Alemania</option>
        <option value="AD">Andorra</option>
        <option value="AO">Angola</option>
        <option value="AI">Anguilla</option>
        <option value="AQ">Antártida</option>
        <option value="AG">Antigua y Barbuda</option>
        <option value="AN">Antillas Holandesas</option>
        <option value="SA">Arabia Saudita</option>
        <option value="DZ">Argelia</option>
        <option value="AR">Argentina</option>
        <option value="AM">Armenia</option>
        <option value="AW">Aruba</option>
        <option value="AU">Australia</option>
        <option value="AT">Austria</option>
        <option value="AZ">Azerbaiyán</option>
        <option value="BS">Bahamas</option>
        <option value="BH">Bahrain</option>
        <option value="BD">Bangladesh</option>
        <option value="BB">Barbados</option>
        <option value="BY">Belarús</option>
        <option value="BE">Bélgica</option>
        <option value="BZ">Belice</option>
        <option value="BJ">Benin</option>
        <option value="BM">Bermuda</option>
        <option value="BO">Bolivia</option>
        <option value="BA">Bosnia y Herzegovina</option>
        <option value="BW">Botswana</option>
        <option value="BR">Brasil</option>
        <option value="BN">Brunei Darussalam</option>
        <option value="BG">Bulgaria</option>
        <option value="BF">Burkina Faso</option>
        <option value="BI">Burundi</option>
        <option value="BT">Bután</option>
        <option value="CV">Cabo Verde</option>
        <option value="KH">Camboya</option>
        <option value="CM">Camerún</option>
        <option value="CA">Canadá</option>
        <option value="TD">Chad</option>
        <option value="CL">Chile</option>
        <option value="CN">China</option>
        <option value="CY">Chipre</option>
        <option value="VA">Ciudad del Vaticano (Santa Sede)</option>
        <option value="CO">Colombia</option>
        <option value="KM">Comores</option>
        <option value="CG">Congo</option>
        <option value="KR">Corea, República de</option>
        <option value="KP">Corea, República Democrática de</option>
        <option value="CI">Costa de Marfil</option>
        <option value="CR">Costa Rica</option>
        <option value="HR">Croacia</option>
        <option value="CU">Cuba</option>
        <option value="DK">Dinamarca</option>
        <option value="DJ">Djibouti</option>
        <option value="DM">Dominica</option>
        <option value="EC">Ecuador</option>
        <option value="EG">Egipto</option>
        <option value="SV">El Salvador</option>
        <option value="AE">Emiratos Árabes Unidos</option>
        <option value="ER">Eritrea</option>
        <option value="SK">Eslovaquia (República Eslovaca)</option>
        <option value="SI">Eslovena</option>
        <option value="ES">España</option>
        <option value="EE">Estonia</option>
        <option value="ET">Etiopía</option>
        <option value="RU">Federación Rusa</option>
        <option value="FJ">Fiji</option>
        <option value="PH">Filipinas</option>
        <option value="FI">Finlandia</option>
        <option value="FR">Francia</option>
        <option value="GA">Gabón</option>
        <option value="GM">Gambia</option>
        <option value="GE">Georgia</option>
        <option value="GH">Ghana</option>
        <option value="GI">Gibraltar</option>
        <option value="GD">Granada</option>
        <option value="GR">Grecia</option>
        <option value="GL">Groenlandia</option>
        <option value="GP">Guadalupe</option>
        <option value="GU">Guam</option>
        <option value="GT">Guatemala</option>
        <option value="GN">Guinea</option>
        <option value="GQ">Guinea Ecuatorial</option>
        <option value="GF">Guinea Francesa</option>
        <option value="GW">Guinea-Bissau</option>
        <option value="GY">Guyana</option>
        <option value="HT">Haití</option>
        <option value="NL">Holanda</option>
        <option value="HN">Honduras</option>
        <option value="HK">Hong Kong</option>
        <option value="HU">Hungría</option>
        <option value="IN">India</option>
        <option value="ID">Indonesia</option>
        <option value="IR">Irán</option>
        <option value="IQ">Iraq</option>
        <option value="IE">Irlanda</option>
        <option value="BV">Isla Bouvet</option>
        <option value="CC">Isla de los Cocos (Keeling)</option>
        <option value="CX">Isla Navidad</option>
        <option value="NF">Isla Norfolk</option>
        <option value="IS">Islandia</option>
        <option value="KY">Islas Caimán</option>
        <option value="CK">Islas Cook</option>
        <option value="FO">Islas Faeroes</option>
        <option value="HM">Islas Heard y Mc Donald</option>
        <option value="FK">Islas Malvinas</option>
        <option value="MP">Islas Mariana del Norte</option>
        <option value="MH">Islas Marshall</option>
        <option value="UM">Islas menores periféricas de Estados Unidos</option>
        <option value="SB">Islas Salomón</option>
        <option value="SC">Islas Seychelles</option>
        <option value="SJ">Islas Svalbard y Jan Mayen</option>
        <option value="TC">Islas Turcas y de Caicos</option>
        <option value="VG">Islas Vírgenes (británicas)</option>
        <option value="VI">Islas Vírgenes (estadounidenses)</option>
        <option value="WF">Islas Wallis y Fortuna</option>
        <option value="IL">Israel</option>
        <option value="IT">Italia</option>
        <option value="JM">Jamaica</option>
        <option value="JP">Japón</option>
        <option value="JO">Jordania</option>
        <option value="KZ">Kazajstán</option>
        <option value="KE">Kenia</option>
        <option value="KI">Kiribati</option>
        <option value="KW">Kuwait</option>
        <option value="KG">Kyrgyzstan</option>
        <option value="LS">Lesotho</option>
        <option value="LV">Letonia</option>
        <option value="LB">Líbano</option>
        <option value="LR">Liberia</option>
        <option value="LY">Libia Jamahiriya Árabe</option>
        <option value="LI">Liechtenstein</option>
        <option value="LT">Lituania</option>
        <option value="LU">Luxemburgo</option>
        <option value="MO">Macao</option>
        <option value="MK">Macedonia, La Antigua República de   Yugoslavia,</option>
        <option value="MG">Madagascar</option>
        <option value="MY">Malasia</option>
        <option value="MW">Malawi</option>
        <option value="MV">Maldivas</option>
        <option value="ML">Mali</option>
        <option value="MT">Malta</option>
        <option value="MA">Marruecos</option>
        <option value="MQ">Martinica</option>
        <option value="MU">Mauricio</option>
        <option value="MR">Mauritania</option>
        <option value="YT">Mayotte</option>
        <option value="MX">México</option>
        <option value="FM">Micronesia, Estados Federales   de,</option>
        <option value="MD">Moldavia, República de,</option>
        <option value="MC">Mónaco</option>
        <option value="MN">Mongolia</option>
        <option value="MS">Montserrat</option>
        <option value="MZ">Mozambique</option>
        <option value="MM">Myanmar</option>
        <option value="NA">Namibia</option>
        <option value="NR">Nauru</option>
        <option value="NP">Nepal</option>
        <option value="NI">Nicaragua</option>
        <option value="NE">Níger</option>
        <option value="NG">Nigeria</option>
        <option value="NU">Niue</option>
        <option value="NO">Noruega</option>
        <option value="NC">Nueva Caledonia</option>
        <option value="NZ">Nueva Zelanda</option>
        <option value="OM">Omán</option>
        <option value="PK">Pakistán</option>
        <option value="PW">Palau</option>
        <option value="PA">Panamá</option>
        <option value="PG">Papua Nueva Guinea</option>
        <option value="PY">Paraguay</option>
        <option value="PE">Perú</option>
        <option value="PN">Pitcairn</option>
        <option value="PF">Polinesia Francesa</option>
        <option value="PL">Polonia</option>
        <option value="PT">Portugal</option>
        <option value="PR">Puerto Rico</option>
        <option value="QA">Qatar</option>
        <option value="FX">Región Metropolitana de Francia,</option>
        <option value="GB">Reino   Unido</option>
        <option value="SY">República Árabe Siria</option>
        <option value="CF">República Centroafricana</option>
        <option value="CZ">República   Checa</option>
        <option value="LA">República Democrática Popular Lao</option>
        <option value="DO">República Dominicana</option>
        <option value="RE">Reunión</option>
        <option value="RW">Ruanda</option>
        <option value="RO">Rumania</option>
        <option value="EH">Sahara Occidental</option>
        <option value="WS">Samoa</option>
        <option value="AS">Samoa Americana</option>
        <option value="KN">San Cristóbal y   Nevis</option>
        <option value="SM">San Marino</option>
        <option value="VC">San Vicente   y las Islas Granadinas</option>
        <option value="LC">Santa Lucía</option>
        <option value="ST">Santo Tomé y Príncipe</option>
        <option value="SN">Senegal</option>
        <option value="SL">Sierra Leona</option>
        <option value="SG">Singapur</option>
        <option value="SO">Somalia</option>
        <option value="LK">Sri Lanka</option>
        <option value="PM">St. Pierre y Miquelón</option>
        <option value="SH">Sta. Helena</option>
        <option value="ZA">Sudáfrica</option>
        <option value="SD">Sudán</option>
        <option value="GS">Sudo Georgia y las Islas Sándwich del Sur</option>
        <option value="SE">Suecia</option>
        <option value="CH">Suiza</option>
        <option value="SR">Surinán</option>
        <option value="SZ">Swazilandia</option>
        <option value="TH">Tailandia</option>
        <option value="TW">Taiwán, Provincia de   China,</option>
        <option value="TZ">Tanzania</option>
        <option value="TJ">Tayikistán</option>
        <option value="IO">Territorio Británico del Océano   Índico</option>
        <option value="TF">Territorios Franceses del Sur</option>
        <option value="TP">Timor Oriental</option>
        <option value="TG">Togo</option>
        <option value="TK">Tokelau</option>
        <option value="TO">Tonga</option>
        <option value="TT">Trinidad y Tobago</option>
        <option value="TN">Túnez</option>
        <option value="TM">Turkmenistán</option>
        <option value="TR">Turquía</option>
        <option value="TV">Tuvalu</option>
        <option value="UA">Ucrania</option>
        <option value="UG">Uganda</option>
        <option value="UY">Uruguay</option>
        <option value="UZ">Uzbekistán</option>
        <option value="VU">Vanuatu</option>
        <option value="VE">Venezuela</option>
        <option value="VN">Vietnam</option>
        <option value="YE">Yemen</option>
        <option value="YU">Yugoslavia</option>
        <option value="ZR">Zaire</option>
        <option value="ZM">Zambia</option>
        <option value="ZW">Zimbabwe</option>
      </select>

      <select class="half l" name="state" id="state" style="width:48.5%;" disabled>
        <option value="">Estado</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">Distrito de Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawai</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">Nueva Hampshire</option>
        <option value="NJ">Nueva Jersey</option>
        <option value="NM">Nuevo México</option>
        <option value="NY">Nueva York</option>
        <option value="NC">Carolina del Norte</option>
        <option value="ND">Dakota del Norte</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pensilvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">Carolina del Sur</option>
        <option value="SD">Dakota del Sur</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>
      <input class="half r" value="" name="city" id="city" type="text" placeholder="Ciudad*">

      <input class="half l" value="" name="phone_day" id="phone_day" type="text" placeholder="Tel&eacute;fono*" style="padding-right: 4px;">
      <input class="half r" value="" name="phone_cel" id="phone_cel" type="text" placeholder="Tel&eacute;fono Celular">

      <div style="font-size:14px; margin-bottom:14px;">
      	<small>*Indica secci&oacute;n obligatoria.</small>
      </div>

      <input name="btnSubmit" id="btnSubmit" type="button" src="images/enviar-button.jpg">

      <p class="fcc">Al hacer clic en el botón "Enviar", autorizo a Keiser University a realizar o permitir la colocación de llamadas de marketing, correos electrónicos y mensajes de texto recurrentes al número de teléfono que he proporcionado, incluso mediante el uso de tecnología automatizada o un correo electrónico pregrabado o voz artificial. Entiendo que no estoy obligado a proporcionar mi número de teléfono como condición para comprar ninguna propiedad, bienes o servicios. <a href="http://www.keiseruniversity.edu/politica_de_privacidad.htm" target="_blank">Pol&iacute;tica de Privacidad.</a></p>
      
    </div><!-- / #form-step-2 -->

    <div id="form-step-3">
    	Gracias por contactar a Keiser University eCampus. <br /><br />
        Muy pronto nos pondremos en contacto contigo para brindarte más información sobre el programa de tu interés. <br /><br />
        Para obtener más detalles puedes comunicarte <br />
        al (877) 205-2341. <br /><br />
        Atentamente, <br />
        Departamento de Admisiones <br />
        Keiser University eCampus <br /><br />
        <a href="http://www.keiseruniversity.edu/fort-lauderdale-online-division-en-linea-en-espanol/" target="_blank">http://www.keiseruniversity.edu/fort-lauderdale-online-division-en-linea-en-espanol/</a>
        <!-- #newDCMTag -->
        <img id="newDCMTag" src="images/form-bg.png" style="display:none;" />
        <!-- KU-Rmkt-Tag -->
        <img src="//bat.bing.com/action/0?ti=5061381&Ver=2" height="0" width="0" style="display:none; visibility: hidden;" />
    </div><!-- / #form-step-3 -->

    </form>
    <script src="js/placeholders.min.js"></script>
</div><!-- / #form-container -->
