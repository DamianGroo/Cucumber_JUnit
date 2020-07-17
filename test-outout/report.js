$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Testowanie.feature");
formatter.feature({
  "line": 3,
  "name": "JUnit + Cucumber",
  "description": "",
  "id": "junit-+-cucumber",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@grupaScenariuszy"
    }
  ]
});
formatter.scenario({
  "line": 69,
  "name": "Użytkownik dodaje produkt do koszyka",
  "description": "",
  "id": "junit-+-cucumber;użytkownik-dodaje-produkt-do-koszyka",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 68,
      "name": "@test5_DodaniePrzedmiotuDoKoszyka"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "Użytkownik uruchamia strone serwisu",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "Strona główna serwisu Media Expert jest wyświetlona",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Użytkownik klika na przycisk Twoje konto",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Użytkownik czeka na załadowanie się strony",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "użytkownik wprowadza w pole login swój login",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "użytkownik wprowadza w pole hasło swoje hasło",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "użytkownik klika na przycisk zaloguj",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "Strona powitalna jest wyświetlona",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "Użytkownik wpisuje szukany produkt w wyszukiwarke",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Użytkownik czeka na znalezienie produktu",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Użytkownik klika na znaleziony produkt",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "Weryfikacja tytulu strony z wyszukanym produktem",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "Użytkownik dodaje produkt do koszyka",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "Test nr piec zakonczony",
  "keyword": "And "
});
formatter.match({
  "location": "PierwszyTest.użytkownik_uruchamia_strone_serwisu()"
});
formatter.result({
  "duration": 9849047500,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.strona_główna_serwisu_Media_Expert_jest_wyświetlona()"
});
formatter.result({
  "duration": 44824200,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_klika_na_przycisk_Twoje_konto()"
});
formatter.result({
  "duration": 4933240400,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_czeka_na_załadowanie_się_strony()"
});
formatter.result({
  "duration": 5000582000,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_wprowadza_w_pole_login_swój_login()"
});
formatter.result({
  "duration": 1415189500,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_wprowadza_w_pole_hasło_swoje_hasło()"
});
formatter.result({
  "duration": 1222769800,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_klika_na_przycisk_zaloguj()"
});
formatter.result({
  "duration": 2667675400,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.strona_powitalna_jest_wyświetlona()"
});
formatter.result({
  "duration": 5094400200,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_wpisuje_szukany_produkt_w_wyszukiwarke()"
});
formatter.result({
  "duration": 1040337200,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_czeka_na_znalezienie_produktu()"
});
formatter.result({
  "duration": 6001279500,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_klika_na_znaleziony_produkt()"
});
formatter.result({
  "duration": 4917170600,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.Weryfikacja_tytulu_strony_z_wyszukanym_produktem()"
});
formatter.result({
  "duration": 1002656300,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.Użytkownik_dodaje_produkt_do_koszyka()"
});
formatter.result({
  "duration": 608231900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div[2]/div[15]/div[1]/div/div[2]/div/div/div[3]/div[4]/div[1]/div[2]/a\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-RLV0C7M\u0027, ip: \u0027169.254.57.70\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\major\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58850}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: df09fd7682d26f16924b4b825514b261\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[2]/div[15]/div[1]/div/div[2]/div/div/div[3]/div[4]/div[1]/div[2]/a}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepsDefinitions.PierwszyTest.Użytkownik_dodaje_produkt_do_koszyka(PierwszyTest.java:327)\r\n\tat ✽.And Użytkownik dodaje produkt do koszyka(Testowanie.feature:82)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PierwszyTest.test_nr_piec_zakonczony()"
});
formatter.result({
  "status": "skipped"
});
});