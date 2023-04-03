# lekce_10_du_minutka2
Stáhněte si základ aplikace pro vylepšenou kuchyňskou minutku.

Umožněte uživateli zadat počet vteřin skrze připravené textové poličko. K získání hodnoty z políčka použijte vlastnost value. Nezapomeňte obsah políčka zkonvertovat na číslo. Minutku spusťte tlačítkem Start.

Zařiďte, aby minutka správně odpočítávala vteřiny a začala zvonit ve chvíli, kdy dosáhne nuly. Pokud si věříte, zkuste celý program napsat rovnou bez nápovědy. Pokud malinko ztrácíte půdu pod nohama, následujte tyto kroky.

Vytvořte si proměnou time, do které uložíte počáteční počet vteřin zadaný uživatelem.  
Při kliknutí na Start nastavte časovač pomocí setInterval. Ten se bude opakovat každou vteřinu a pokaždé sníží hodnotu v proměnné time o jedna.  
Jakmile proměnná time dosáhne nuly, zapněte zvonění a zrušte časovač aby nezačal počítat do mínusu.

## Minutka 3 (bonus)
Vylepšete program naší kuchyňské minutky tak, aby zobrazovala nejen vteřiny, ale i minuty. Layout stránky je na to připraven. Nechejte uživatele zadat minuty, nikoliv vteřiny, a správně odpočítávejte čas až k nule.

Dejte pozor na správné formátování, kdy jednociferné hodnoty je zvykem zobrazovat s nulou na začátku. Vzpomeňte si, že na řetězcích máme metodu padStart, která nám s tímto může velmi pomoct.
