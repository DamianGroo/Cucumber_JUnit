package Runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        features = "E:\\CUCUMBER BIBLIOTEKI I WSZYSTKO\\z Prawdziwego Brancha dla JUnit\\Cucumber-PrawdziwyBranchDlaJUnit\\src\\main\\java\\Features"
        , glue = {"stepsDefinitions"}
    //    , format = {"pretty", "html:test-outout"}
       // , tags = { "@scenariusz1" , "@scenariusz2" }
    //    , tags = {"@grupaScenariuszy"}

       , tags = {"@grupaScenariuszy"}
     //   , tags = {"@test7_TestKtoryKonczySieNiepowodzeniem"}
     //   , tags = {"@test5_DodaniePrzedmiotuDoKoszyka"}
        , monochrome = true
                )






public class TestRunner {




}
