package com.itmoprofessionals.softwaretest.lab2;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static java.lang.Math.PI;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class SecondLayerTest {
    final static double EPSILON = 1E-10;
    final static double PERIOD = 2* PI;
    final static double PRECISION = 0.001;
    static SystemOfEquations systemMock;

    @BeforeAll
    static void createMock() {
        systemMock = Mockito.mock(SystemOfEquations.class, Mockito.CALLS_REAL_METHODS);
        /*
          Негативная часть функции имеет вид периодической функции, которая
          состоит из 4-ех частей.
          В каждой части есть граничные точки, экстремумы или точки перегиба

          Граничные точки представляют собой точки разрыва второго рода. В таких
          точках невозможно посчитать значение функции и предел функции, в
          окрестностях этих точек стремиться к +- бесконечности

          Помимо этих точек есть точки разрыва первого рода.
          Функция в данных точках не определена, но в эа односторонних пределах
          в этой точке существуют и конечны


          Для тестирования были исследованы все точки разрыва первого и второго рода,
          была проконтролирована соблюдение периодичности, и выбраны и протестированы
          точки в каждом классе эквивалентности.
         */

        // Значения около 0 и в эпсилон-окрестности от 0 + период
        //        when(systemMock.system(0)).thenReturn(Double.NaN);
        when(systemMock.sin(0.0)).thenReturn(0.0);
        when(systemMock.cos(0.0)).thenReturn(1.0);
        when(systemMock.tan(0.0)).thenReturn(0.0);
        when(systemMock.cot(0.0)).thenReturn(Double.NaN);
        when(systemMock.sec(0.0)).thenReturn(1.0);
        when(systemMock.csc(0.0)).thenReturn(Double.NaN);

        // when(systemMock.system(0.0 - PERIOD)).thenReturn(Double.NaN);
        when(systemMock.sin(0.0 - PERIOD)).thenReturn(0.0);
        when(systemMock.cos(0.0 - PERIOD)).thenReturn(1.0);
        when(systemMock.tan(0.0 - PERIOD)).thenReturn(0.0);
        when(systemMock.cot(0.0 - PERIOD)).thenReturn(Double.NaN);
        when(systemMock.sec(0.0 - PERIOD)).thenReturn(1.0);
        when(systemMock.csc(0.0 - PERIOD)).thenReturn(Double.NaN);

        // when(systemMock.system(0.0 - 100 * PERIOD)).thenReturn(Double.NaN);
        when(systemMock.sin(0.0 - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.cos(0.0 - 100 * PERIOD)).thenReturn(1.0);
        when(systemMock.tan(0.0 - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.cot(0.0 - 100 * PERIOD)).thenReturn(Double.NaN);
        when(systemMock.sec(0.0 - 100 * PERIOD)).thenReturn(1.0);
        when(systemMock.csc(0.0 - 100 * PERIOD)).thenReturn(Double.NaN);

        // when(systemMock.system(0.0 - EPSILON)).thenReturn(Double.POSITIVE_INFINITY);
        when(systemMock.sin(0.0 - EPSILON)).thenReturn(0.0);
        when(systemMock.cos(0.0 - EPSILON)).thenReturn(1.0);
        when(systemMock.tan(0.0 - EPSILON)).thenReturn(0.0);
        when(systemMock.cot(0.0 - EPSILON)).thenReturn(0.0);
        when(systemMock.sec(0.0 - EPSILON)).thenReturn(1.0);
        when(systemMock.csc(0.0 - EPSILON)).thenReturn(0.0);

        // when(systemMock.system(0.0 - EPSILON - PERIOD)).thenReturn(POSITIVE_INFINITY);
        when(systemMock.sin(0.0 - EPSILON - PERIOD)).thenReturn(0.0);
        when(systemMock.cos(0.0 - EPSILON - PERIOD)).thenReturn(1.0);
        when(systemMock.tan(0.0 - EPSILON - PERIOD)).thenReturn(0.0);
        when(systemMock.cot(0.0 - EPSILON - PERIOD)).thenReturn(0.0);
        when(systemMock.sec(0.0 - EPSILON - PERIOD)).thenReturn(1.0);
        when(systemMock.csc(0.0 - EPSILON - PERIOD)).thenReturn(0.0);

        // when(systemMock.system(0.0 - EPSILON - 100 * PERIOD)).thenReturn(Double.POSITIVE_INFINITY);
        when(systemMock.sin(0.0 - EPSILON - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.cos(0.0 - EPSILON - 100 * PERIOD)).thenReturn(1.0);
        when(systemMock.tan(0.0 - EPSILON - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.cot(0.0 - EPSILON - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.sec(0.0 - EPSILON - 100 * PERIOD)).thenReturn(1.0);
        when(systemMock.csc(0.0 - EPSILON - 100 * PERIOD)).thenReturn(0.0);

        //недо-парабола
        //when(systemMock.system(-1.288)).thenReturn(25.8);
        when(systemMock.sin(-1.288)).thenReturn(-0.96027890115);
        when(systemMock.cos(-1.288)).thenReturn(0.27904198966);
        when(systemMock.tan(-1.288)).thenReturn(-3.44134193681);
        when(systemMock.cot(-1.288)).thenReturn(-0.29058431808);
        when(systemMock.sec(-1.288)).thenReturn(3.58369004324);
        when(systemMock.csc(-1.288)).thenReturn(-1.04136412744);

        //
        when(systemMock.sin(-1.288 - PERIOD)).thenReturn(-0.96027890115);
        when(systemMock.cos(-1.288 - PERIOD)).thenReturn(0.27904198966);
        when(systemMock.tan(-1.288 - PERIOD)).thenReturn(-3.44134193681);
        when(systemMock.cot(-1.288 - PERIOD)).thenReturn(-0.29058431808);
        when(systemMock.sec(-1.288 - PERIOD)).thenReturn(3.58369004324);
        when(systemMock.csc(-1.288 - PERIOD)).thenReturn(-1.04136412744);

        //
        when(systemMock.sin(-1.288 - 100 * PERIOD)).thenReturn(-0.96027890115);
        when(systemMock.cos(-1.288 - 100 * PERIOD)).thenReturn(0.27904198966);
        when(systemMock.tan(-1.288 - 100 * PERIOD)).thenReturn(-3.44134193681);
        when(systemMock.cot(-1.288 - 100 * PERIOD)).thenReturn(-0.29058431808);
        when(systemMock.sec(-1.288 - 100 * PERIOD)).thenReturn(3.58369004324);
        when(systemMock.csc(-1.288 - 100 * PERIOD)).thenReturn(-1.04136412744);

        //when(systemMock.system(-1.425)).thenReturn(21.496);
        when(systemMock.sin(-1.425)).thenReturn(-0.98939052895);
        when(systemMock.cos(-1.425)).thenReturn(0.14528035388);
        when(systemMock.tan(-1.425)).thenReturn(-6.81021557649);
        when(systemMock.cot(-1.425)).thenReturn(-0.14683822982);
        when(systemMock.sec(-1.425)).thenReturn(6.88324314537);
        when(systemMock.csc(-1.425)).thenReturn(-1.01072323894);

        //
        when(systemMock.sin(-1.425 - PERIOD)).thenReturn(-0.98939052895);
        when(systemMock.cos(-1.425 - PERIOD)).thenReturn(0.14528035388);
        when(systemMock.tan(-1.425 - PERIOD)).thenReturn(-6.81021557649);
        when(systemMock.cot(-1.425 - PERIOD)).thenReturn(-0.14683822982);
        when(systemMock.sec(-1.425 - PERIOD)).thenReturn(6.88324314537);
        when(systemMock.csc(-1.425 - PERIOD)).thenReturn(-1.01072323894);

        //
        when(systemMock.sin(-1.425 - 100 * PERIOD)).thenReturn(-0.98939052895);
        when(systemMock.cos(-1.425 - 100 * PERIOD)).thenReturn(0.14528035388);
        when(systemMock.tan(-1.425 - 100 * PERIOD)).thenReturn(-6.81021557649);
        when(systemMock.cot(-1.425 - 100 * PERIOD)).thenReturn(-0.14683822982);
        when(systemMock.sec(-1.425 - 100 * PERIOD)).thenReturn(6.88324314537);
        when(systemMock.csc(-1.425 - 100 * PERIOD)).thenReturn(-1.01072323894);

        //when(systemMock.system(-1.5)).thenReturn(25.58);
        when(systemMock.sin(-1.5)).thenReturn(-0.9974949866);
        when(systemMock.cos(-1.5)).thenReturn(0.07073720166);
        when(systemMock.tan(-1.5)).thenReturn(-14.1014199472);
        when(systemMock.cot(-1.5)).thenReturn(-0.0709148443);
        when(systemMock.sec(-1.5)).thenReturn(14.136832903);
        when(systemMock.csc(-1.5)).thenReturn(-1.00251130425);

        //
        when(systemMock.sin(-1.5 - PERIOD)).thenReturn(-0.9974949866);
        when(systemMock.cos(-1.5 - PERIOD)).thenReturn(0.07073720166);
        when(systemMock.tan(-1.5 - PERIOD)).thenReturn(-14.1014199472);
        when(systemMock.cot(-1.5 - PERIOD)).thenReturn(-0.0709148443);
        when(systemMock.sec(-1.5 - PERIOD)).thenReturn(14.136832903);
        when(systemMock.csc(-1.5 - PERIOD)).thenReturn(-1.00251130425);

        //
        when(systemMock.sin(-1.5 - 100 * PERIOD)).thenReturn(-0.9974949866);
        when(systemMock.cos(-1.5 - 100 * PERIOD)).thenReturn(0.07073720166);
        when(systemMock.tan(-1.5 - 100 * PERIOD)).thenReturn(-14.1014199472);
        when(systemMock.cot(-1.5 - 100 * PERIOD)).thenReturn(-0.0709148443);
        when(systemMock.sec(-1.5 - 100 * PERIOD)).thenReturn(14.136832903);
        when(systemMock.csc(-1.5 - 100 * PERIOD)).thenReturn(-1.00251130425);

        //разрыв в -0.5пи
        //
        when(systemMock.sin(-0.5 * PI)).thenReturn(-1.0);
        when(systemMock.cos(-0.5 * PI)).thenReturn(0.0);
        when(systemMock.tan(-0.5 * PI)).thenReturn(Double.NaN);
        when(systemMock.cot(-0.5 * PI)).thenReturn(0.0);
        when(systemMock.sec(-0.5 * PI)).thenReturn(Double.NaN);
        when(systemMock.csc(-0.5 * PI)).thenReturn(-1.0);

        //
        when(systemMock.sin(-0.5 * PI - PERIOD)).thenReturn(-1.0);
        when(systemMock.cos(-0.5 * PI - PERIOD)).thenReturn(0.0);
        when(systemMock.tan(-0.5 * PI - PERIOD)).thenReturn(Double.NaN);
        when(systemMock.cot(-0.5 * PI - PERIOD)).thenReturn(0.0);
        when(systemMock.sec(-0.5 * PI - PERIOD)).thenReturn(Double.NaN);
        when(systemMock.csc(-0.5 * PI - PERIOD)).thenReturn(-1.0);

        //
        when(systemMock.sin(-0.5 * PI - 100 * PERIOD)).thenReturn(-1.0);
        when(systemMock.cos(-0.5 * PI - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.tan(-0.5 * PI - 100 * PERIOD)).thenReturn(Double.NaN);
        when(systemMock.cot(-0.5 * PI - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.sec(-0.5 * PI - 100 * PERIOD)).thenReturn(Double.NaN);
        when(systemMock.csc(-0.5 * PI - 100 * PERIOD)).thenReturn(-1.0);

        //
        when(systemMock.sin(-0.5 * PI + EPSILON)).thenReturn(-1.0);
        when(systemMock.cos(-0.5 * PI + EPSILON)).thenReturn(0.0);
        when(systemMock.tan(-0.5 * PI + EPSILON)).thenReturn(Double.NaN);
        when(systemMock.cot(-0.5 * PI + EPSILON)).thenReturn(0.0);
        when(systemMock.sec(-0.5 * PI + EPSILON)).thenReturn(Double.NaN);
        when(systemMock.csc(-0.5 * PI + EPSILON)).thenReturn(-1.0);

        //
        when(systemMock.sin(-0.5 * PI + EPSILON - PERIOD)).thenReturn(-1.0);
        when(systemMock.cos(-0.5 * PI + EPSILON - PERIOD)).thenReturn(0.0);
        when(systemMock.tan(-0.5 * PI + EPSILON - PERIOD)).thenReturn(Double.NaN);
        when(systemMock.cot(-0.5 * PI + EPSILON - PERIOD)).thenReturn(0.0);
        when(systemMock.sec(-0.5 * PI + EPSILON - PERIOD)).thenReturn(Double.NaN);
        when(systemMock.csc(-0.5 * PI + EPSILON - PERIOD)).thenReturn(-1.0);

        //
        when(systemMock.sin(-0.5 * PI + EPSILON - 100 * PERIOD)).thenReturn(-1.0);
        when(systemMock.cos(-0.5 * PI + EPSILON - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.tan(-0.5 * PI + EPSILON - 100 * PERIOD)).thenReturn(Double.NaN);
        when(systemMock.cot(-0.5 * PI + EPSILON - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.sec(-0.5 * PI + EPSILON - 100 * PERIOD)).thenReturn(Double.NaN);
        when(systemMock.csc(-0.5 * PI + EPSILON - 100 * PERIOD)).thenReturn(-1.0);

        //
        when(systemMock.sin(-0.5 * PI - EPSILON)).thenReturn(-1.0);
        when(systemMock.cos(-0.5 * PI - EPSILON)).thenReturn(0.0);
        when(systemMock.tan(-0.5 * PI - EPSILON)).thenReturn(Double.NaN);
        when(systemMock.cot(-0.5 * PI - EPSILON)).thenReturn(0.0);
        when(systemMock.sec(-0.5 * PI - EPSILON)).thenReturn(Double.NaN);
        when(systemMock.csc(-0.5 * PI - EPSILON)).thenReturn(-1.0);

        //
        when(systemMock.sin(-0.5 * PI - EPSILON - PERIOD)).thenReturn(-1.0);
        when(systemMock.cos(-0.5 * PI - EPSILON - PERIOD)).thenReturn(0.0);
        when(systemMock.tan(-0.5 * PI - EPSILON - PERIOD)).thenReturn(Double.NaN);
        when(systemMock.cot(-0.5 * PI - EPSILON - PERIOD)).thenReturn(0.0);
        when(systemMock.sec(-0.5 * PI - EPSILON - PERIOD)).thenReturn(Double.NaN);
        when(systemMock.csc(-0.5 * PI - EPSILON - PERIOD)).thenReturn(-1.0);

        //
        when(systemMock.sin(-0.5 * PI - EPSILON - 100 * PERIOD)).thenReturn(-1.0);
        when(systemMock.cos(-0.5 * PI - EPSILON - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.tan(-0.5 * PI - EPSILON - 100 * PERIOD)).thenReturn(Double.NaN);
        when(systemMock.cot(-0.5 * PI - EPSILON - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.sec(-0.5 * PI - EPSILON - 100 * PERIOD)).thenReturn(Double.NaN);
        when(systemMock.csc(-0.5 * PI - EPSILON - 100 * PERIOD)).thenReturn(-1.0);

        //возрастающая часть
        //
        when(systemMock.sin(-1.7)).thenReturn(-0.991664810452);
        when(systemMock.cos(-1.7)).thenReturn(-0.1288444942955);
        when(systemMock.tan(-1.7)).thenReturn(7.696602139);
        when(systemMock.cot(-1.7)).thenReturn(0.1299274643382);
        when(systemMock.sec(-1.7)).thenReturn(-7.76129399605);
        when(systemMock.csc(-1.7)).thenReturn(-1.00840524889);

        //
        when(systemMock.sin(-1.7 - PERIOD)).thenReturn(-0.991664810452);
        when(systemMock.cos(-1.7 - PERIOD)).thenReturn(-0.1288444942955);
        when(systemMock.tan(-1.7 - PERIOD)).thenReturn(7.696602139);
        when(systemMock.cot(-1.7 - PERIOD)).thenReturn(0.1299274643382);
        when(systemMock.sec(-1.7 - PERIOD)).thenReturn(-7.76129399605);
        when(systemMock.csc(-1.7 - PERIOD)).thenReturn(-1.00840524889);

        //
        when(systemMock.sin(-1.7 - 100 * PERIOD)).thenReturn(-0.991664810452);
        when(systemMock.cos(-1.7 - 100 * PERIOD)).thenReturn(-0.1288444942955);
        when(systemMock.tan(-1.7 - 100 * PERIOD)).thenReturn(7.696602139);
        when(systemMock.cot(-1.7 - 100 * PERIOD)).thenReturn(0.1299274643382);
        when(systemMock.sec(-1.7 - 100 * PERIOD)).thenReturn(-7.76129399605);
        when(systemMock.csc(-1.7 - 100 * PERIOD)).thenReturn(-1.00840524889);
        
        //0
        //when(systemMock.system(-2.237)).thenReturn(0.0);
        when(systemMock.sin(-2.237)).thenReturn(-0.78617347771);
        when(systemMock.cos(-2.237)).thenReturn(-0.61800587614);
        when(systemMock.tan(-2.237)).thenReturn(1.2721132728);
        when(systemMock.cot(-2.237)).thenReturn(0.78609351964);
        when(systemMock.sec(-2.237)).thenReturn(-1.61810759186);
        when(systemMock.csc(-2.237)).thenReturn(-1.27198389205);

        //
        when(systemMock.sin(-2.237 - PERIOD)).thenReturn(-0.78617347771);
        when(systemMock.cos(-2.237 - PERIOD)).thenReturn(-0.61800587614);
        when(systemMock.tan(-2.237 - PERIOD)).thenReturn(1.2721132728);
        when(systemMock.cot(-2.237 - PERIOD)).thenReturn(0.78609351964);
        when(systemMock.sec(-2.237 - PERIOD)).thenReturn(-1.61810759186);
        when(systemMock.csc(-2.237 - PERIOD)).thenReturn(-1.27198389205);

        //
        when(systemMock.sin(-2.237 - 100 * PERIOD)).thenReturn(-0.78617347771);
        when(systemMock.cos(-2.237 - 100 * PERIOD)).thenReturn(-0.61800587614);
        when(systemMock.tan(-2.237 - 100 * PERIOD)).thenReturn(1.2721132728);
        when(systemMock.cot(-2.237 - 100 * PERIOD)).thenReturn(0.78609351964);
        when(systemMock.sec(-2.237 - 100 * PERIOD)).thenReturn(-1.61810759186);
        when(systemMock.csc(-2.237 - 100 * PERIOD)).thenReturn(-1.27198389205);
        
        // разрыв второго рода 
        // Граничное значение между второй и третьей частями и окрестности точки PI
        // when(systemMock.system(-PI)).thenReturn(Double.NaN)
        when(systemMock.sin(-PI)).thenReturn(0.0);
        when(systemMock.cos(-PI)).thenReturn(-1.0);
        when(systemMock.tan(-PI)).thenReturn(0.0);
        when(systemMock.cot(-PI)).thenReturn(Double.NaN);
        when(systemMock.sec(-PI)).thenReturn(-1.0);
        when(systemMock.csc(-PI)).thenReturn(Double.NaN);

        //
        when(systemMock.sin(-PI - PERIOD)).thenReturn(0.0);
        when(systemMock.cos(-PI - PERIOD)).thenReturn(-1.0);
        when(systemMock.tan(-PI - PERIOD)).thenReturn(0.0);
        when(systemMock.cot(-PI - PERIOD)).thenReturn(Double.NaN);
        when(systemMock.sec(-PI - PERIOD)).thenReturn(-1.0);
        when(systemMock.csc(-PI - PERIOD)).thenReturn(Double.NaN);

        //
        when(systemMock.sin(-PI - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.cos(-PI - 100 * PERIOD)).thenReturn(-1.0);
        when(systemMock.tan(-PI - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.cot(-PI - 100 * PERIOD)).thenReturn(Double.NaN);
        when(systemMock.sec(-PI - 100 * PERIOD)).thenReturn(-1.0);
        when(systemMock.csc(-PI - 100 * PERIOD)).thenReturn(Double.NaN);

        //
        when(systemMock.sin(-PI + EPSILON)).thenReturn(0.0);
        when(systemMock.cos(-PI + EPSILON)).thenReturn(-1.0);
        when(systemMock.tan(-PI + EPSILON)).thenReturn(0.0);
        when(systemMock.cot(-PI + EPSILON)).thenReturn(Double.NaN);
        when(systemMock.sec(-PI + EPSILON)).thenReturn(-1.0);
        when(systemMock.csc(-PI + EPSILON)).thenReturn(Double.NaN);

        //
        when(systemMock.sin(-PI + EPSILON - PERIOD)).thenReturn(0.0);
        when(systemMock.cos(-PI + EPSILON - PERIOD)).thenReturn(-1.0);
        when(systemMock.tan(-PI + EPSILON - PERIOD)).thenReturn(0.0);
        when(systemMock.cot(-PI + EPSILON - PERIOD)).thenReturn(Double.NaN);
        when(systemMock.sec(-PI + EPSILON - PERIOD)).thenReturn(-1.0);
        when(systemMock.csc(-PI + EPSILON - PERIOD)).thenReturn(Double.NaN);

        //
        when(systemMock.sin(-PI + EPSILON - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.cos(-PI + EPSILON - 100 * PERIOD)).thenReturn(-1.0);
        when(systemMock.tan(-PI + EPSILON - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.cot(-PI + EPSILON - 100 * PERIOD)).thenReturn(Double.NaN);
        when(systemMock.sec(-PI + EPSILON - 100 * PERIOD)).thenReturn(-1.0);
        when(systemMock.csc(-PI + EPSILON - 100 * PERIOD)).thenReturn(Double.NaN);

        //
        when(systemMock.sin(-PI - EPSILON)).thenReturn(0.0);
        when(systemMock.cos(-PI - EPSILON)).thenReturn(-1.0);
        when(systemMock.tan(-PI - EPSILON)).thenReturn(0.0);
        when(systemMock.cot(-PI - EPSILON)).thenReturn(Double.NaN);
        when(systemMock.sec(-PI - EPSILON)).thenReturn(-1.0);
        when(systemMock.csc(-PI - EPSILON)).thenReturn(Double.NaN);

        //
        when(systemMock.sin(-PI - EPSILON - PERIOD)).thenReturn(0.0);
        when(systemMock.cos(-PI - EPSILON - PERIOD)).thenReturn(-1.0);
        when(systemMock.tan(-PI - EPSILON - PERIOD)).thenReturn(0.0);
        when(systemMock.cot(-PI - EPSILON - PERIOD)).thenReturn(Double.NaN);
        when(systemMock.sec(-PI - EPSILON - PERIOD)).thenReturn(-1.0);
        when(systemMock.csc(-PI - EPSILON - PERIOD)).thenReturn(Double.NaN);

        //
        when(systemMock.sin(-PI - EPSILON - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.cos(-PI - EPSILON - 100 * PERIOD)).thenReturn(-1.0);
        when(systemMock.tan(-PI - EPSILON - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.cot(-PI - EPSILON - 100 * PERIOD)).thenReturn(Double.NaN);
        when(systemMock.sec(-PI - EPSILON - 100 * PERIOD)).thenReturn(-1.0);
        when(systemMock.csc(-PI - EPSILON - 100 * PERIOD)).thenReturn(Double.NaN);

        //убывает
        //when(systemMock.system(-3.665)).thenReturn(3.801);
        when(systemMock.sin(-3.665)).thenReturn(0.4998342083);
        when(systemMock.cos(-3.665)).thenReturn(-0.86612110251);
        when(systemMock.tan(-3.665)).thenReturn(-0.57709505847);
        when(systemMock.cot(-3.665)).thenReturn(-1.7328167783);
        when(systemMock.sec(-3.665)).thenReturn(-1.15457295418);
        when(systemMock.csc(-3.665)).thenReturn(2.00066338677);

        //
        when(systemMock.sin(-3.665 - PERIOD)).thenReturn(0.4998342083);
        when(systemMock.cos(-3.665 - PERIOD)).thenReturn(-0.86612110251);
        when(systemMock.tan(-3.665 - PERIOD)).thenReturn(-0.57709505847);
        when(systemMock.cot(-3.665 - PERIOD)).thenReturn(-1.7328167783);
        when(systemMock.sec(-3.665 - PERIOD)).thenReturn(-1.15457295418);
        when(systemMock.csc(-3.665 - PERIOD)).thenReturn(2.00066338677);

        //
        when(systemMock.sin(-3.665 - 100 * PERIOD)).thenReturn(0.4998342083);
        when(systemMock.cos(-3.665 - 100 * PERIOD)).thenReturn(-0.86612110251);
        when(systemMock.tan(-3.665 - 100 * PERIOD)).thenReturn(-0.57709505847);
        when(systemMock.cot(-3.665 - 100 * PERIOD)).thenReturn(-1.7328167783);
        when(systemMock.sec(-3.665 - 100 * PERIOD)).thenReturn(-1.15457295418);
        when(systemMock.csc(-3.665 - 100 * PERIOD)).thenReturn(2.00066338677);

        //0
        //when(systemMock.system(-4.046)).thenReturn(0.0);
        when(systemMock.sin(-4.046)).thenReturn(0.78605894328);
        when(systemMock.cos(-4.046)).thenReturn(-0.61815154912);
        when(systemMock.tan(-4.046)).thenReturn(-1.27162820251);
        when(systemMock.cot(-4.046)).thenReturn(-0.78639337978);
        when(systemMock.sec(-4.046)).thenReturn(-1.61772627024);
        when(systemMock.csc(-4.046)).thenReturn(1.27216922922);

        //
        when(systemMock.sin(-4.046 - PERIOD)).thenReturn(0.78605894328);
        when(systemMock.cos(-4.046 - PERIOD)).thenReturn(-0.61815154912);
        when(systemMock.tan(-4.046 - PERIOD)).thenReturn(-1.27162820251);
        when(systemMock.cot(-4.046 - PERIOD)).thenReturn(-0.78639337978);
        when(systemMock.sec(-4.046 - PERIOD)).thenReturn(-1.61772627024);
        when(systemMock.csc(-4.046 - PERIOD)).thenReturn(1.27216922922);

        //
        when(systemMock.sin(-4.046 - 100 * PERIOD)).thenReturn(0.78605894328);
        when(systemMock.cos(-4.046 - 100 * PERIOD)).thenReturn(-0.61815154912);
        when(systemMock.tan(-4.046 - 100 * PERIOD)).thenReturn(-1.27162820251);
        when(systemMock.cot(-4.046 - 100 * PERIOD)).thenReturn(-0.78639337978);
        when(systemMock.sec(-4.046 - 100 * PERIOD)).thenReturn(-1.61772627024);
        when(systemMock.csc(-4.046 - 100 * PERIOD)).thenReturn(1.27216922922);

        //разрыв в -1.5пи
        when(systemMock.sin(-1.5 * PI)).thenReturn(1.0);
        when(systemMock.cos(-1.5 * PI)).thenReturn(0.0);
        when(systemMock.tan(-1.5 * PI)).thenReturn(Double.NaN);
        when(systemMock.cot(-1.5 * PI)).thenReturn(0.0);
        when(systemMock.sec(-1.5 * PI)).thenReturn(Double.NaN);
        when(systemMock.csc(-1.5 * PI)).thenReturn(1.0);

        //
        when(systemMock.sin(-1.5 * PI - PERIOD)).thenReturn(1.0);
        when(systemMock.cos(-1.5 * PI - PERIOD)).thenReturn(0.0);
        when(systemMock.tan(-1.5 * PI - PERIOD)).thenReturn(Double.NaN);
        when(systemMock.cot(-1.5 * PI - PERIOD)).thenReturn(0.0);
        when(systemMock.sec(-1.5 * PI - PERIOD)).thenReturn(Double.NaN);
        when(systemMock.csc(-1.5 * PI - PERIOD)).thenReturn(1.0);

        //
        when(systemMock.sin(-1.5 * PI - 100 * PERIOD)).thenReturn(1.0);
        when(systemMock.cos(-1.5 * PI - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.tan(-1.5 * PI - 100 * PERIOD)).thenReturn(Double.NaN);
        when(systemMock.cot(-1.5 * PI - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.sec(-1.5 * PI - 100 * PERIOD)).thenReturn(Double.NaN);
        when(systemMock.csc(-1.5 * PI - 100 * PERIOD)).thenReturn(1.0);

        //
        when(systemMock.sin(-1.5 * PI + EPSILON)).thenReturn(1.0);
        when(systemMock.cos(-1.5 * PI + EPSILON)).thenReturn(0.0);
        when(systemMock.tan(-1.5 * PI + EPSILON)).thenReturn(Double.NaN);
        when(systemMock.cot(-1.5 * PI + EPSILON)).thenReturn(0.0);
        when(systemMock.sec(-1.5 * PI + EPSILON)).thenReturn(Double.NaN);
        when(systemMock.csc(-1.5 * PI + EPSILON)).thenReturn(1.0);

        //
        when(systemMock.sin(-1.5 * PI + EPSILON - PERIOD)).thenReturn(1.0);
        when(systemMock.cos(-1.5 * PI + EPSILON - PERIOD)).thenReturn(0.0);
        when(systemMock.tan(-1.5 * PI + EPSILON - PERIOD)).thenReturn(Double.NaN);
        when(systemMock.cot(-1.5 * PI + EPSILON - PERIOD)).thenReturn(0.0);
        when(systemMock.sec(-1.5 * PI + EPSILON - PERIOD)).thenReturn(Double.NaN);
        when(systemMock.csc(-1.5 * PI + EPSILON - PERIOD)).thenReturn(1.0);

        //
        when(systemMock.sin(-1.5 * PI + EPSILON - 100 * PERIOD)).thenReturn(1.0);
        when(systemMock.cos(-1.5 * PI + EPSILON - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.tan(-1.5 * PI + EPSILON - 100 * PERIOD)).thenReturn(Double.NaN);
        when(systemMock.cot(-1.5 * PI + EPSILON - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.sec(-1.5 * PI + EPSILON - 100 * PERIOD)).thenReturn(Double.NaN);
        when(systemMock.csc(-1.5 * PI + EPSILON - 100 * PERIOD)).thenReturn(1.0);

        //
        when(systemMock.sin(-1.5 * PI - EPSILON)).thenReturn(1.0);
        when(systemMock.cos(-1.5 * PI - EPSILON)).thenReturn(0.0);
        when(systemMock.tan(-1.5 * PI - EPSILON)).thenReturn(Double.NaN);
        when(systemMock.cot(-1.5 * PI - EPSILON)).thenReturn(0.0);
        when(systemMock.sec(-1.5 * PI - EPSILON)).thenReturn(Double.NaN);
        when(systemMock.csc(-1.5 * PI - EPSILON)).thenReturn(1.0);

        //
        when(systemMock.sin(-1.5 * PI - EPSILON - PERIOD)).thenReturn(1.0);
        when(systemMock.cos(-1.5 * PI - EPSILON - PERIOD)).thenReturn(0.0);
        when(systemMock.tan(-1.5 * PI - EPSILON - PERIOD)).thenReturn(Double.NaN);
        when(systemMock.cot(-1.5 * PI - EPSILON - PERIOD)).thenReturn(0.0);
        when(systemMock.sec(-1.5 * PI - EPSILON - PERIOD)).thenReturn(Double.NaN);
        when(systemMock.csc(-1.5 * PI - EPSILON - PERIOD)).thenReturn(1.0);

        //
        when(systemMock.sin(-1.5 * PI - EPSILON - 100 * PERIOD)).thenReturn(1.0);
        when(systemMock.cos(-1.5 * PI - EPSILON - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.tan(-1.5 * PI - EPSILON - 100 * PERIOD)).thenReturn(Double.NaN);
        when(systemMock.cot(-1.5 * PI - EPSILON - 100 * PERIOD)).thenReturn(0.0);
        when(systemMock.sec(-1.5 * PI - EPSILON - 100 * PERIOD)).thenReturn(Double.NaN);
        when(systemMock.csc(-1.5 * PI - EPSILON - 100 * PERIOD)).thenReturn(1.0);

        //недо-парабола
        //when(systemMock.system(-4.783)).thenReturn(25.61);
        when(systemMock.sin(-4.783)).thenReturn(0.99750807758);
        when(systemMock.cos(-4.783)).thenReturn(0.07055235747);
        when(systemMock.tan(-4.783)).thenReturn(14.1385506216);
        when(systemMock.cot(-4.783)).thenReturn(0.07072860767);
        when(systemMock.sec(-4.783)).thenReturn(14.173870808);
        when(systemMock.csc(-4.783)).thenReturn(1.0024981476);

        //
        when(systemMock.sin(-4.783 - PERIOD)).thenReturn(0.99750807758);
        when(systemMock.cos(-4.783 - PERIOD)).thenReturn(0.07055235747);
        when(systemMock.tan(-4.783 - PERIOD)).thenReturn(14.1385506216);
        when(systemMock.cot(-4.783 - PERIOD)).thenReturn(0.07072860767);
        when(systemMock.sec(-4.783 - PERIOD)).thenReturn(14.173870808);
        when(systemMock.csc(-4.783 - PERIOD)).thenReturn(1.0024981476);

        //
        when(systemMock.sin(-4.783 - 100 * PERIOD)).thenReturn(0.99750807758);
        when(systemMock.cos(-4.783 - 100 * PERIOD)).thenReturn(0.07055235747);
        when(systemMock.tan(-4.783 - 100 * PERIOD)).thenReturn(14.1385506216);
        when(systemMock.cot(-4.783 - 100 * PERIOD)).thenReturn(0.07072860767);
        when(systemMock.sec(-4.783 - 100 * PERIOD)).thenReturn(14.173870808);
        when(systemMock.csc(-4.783 - 100 * PERIOD)).thenReturn(1.0024981476);

        //when(systemMock.system(-4.859)).thenReturn(21.496);
        when(systemMock.sin(-4.859)).thenReturn(0.98927184176);
        when(systemMock.cos(-4.859)).thenReturn(0.14608635493);
        when(systemMock.tan(-4.859)).thenReturn(6.77182918404);
        when(systemMock.cot(-4.859)).thenReturn(0.14767058837);
        when(systemMock.sec(-4.859)).thenReturn(6.84526628393);
        when(systemMock.csc(-4.859)).thenReturn(1.01084449975);

        //
        when(systemMock.sin(-4.859 - PERIOD)).thenReturn(0.98927184176);
        when(systemMock.cos(-4.859 - PERIOD)).thenReturn(0.14608635493);
        when(systemMock.tan(-4.859 - PERIOD)).thenReturn(6.77182918404);
        when(systemMock.cot(-4.859 - PERIOD)).thenReturn(0.14767058837);
        when(systemMock.sec(-4.859 - PERIOD)).thenReturn(6.84526628393);
        when(systemMock.csc(-4.859 - PERIOD)).thenReturn(1.01084449975);

        //
        when(systemMock.sin(-4.859 - 100 * PERIOD)).thenReturn(0.98927184176);
        when(systemMock.cos(-4.859 - 100 * PERIOD)).thenReturn(0.14608635493);
        when(systemMock.tan(-4.859 - 100 * PERIOD)).thenReturn(6.77182918404);
        when(systemMock.cot(-4.859 - 100 * PERIOD)).thenReturn(0.14767058837);
        when(systemMock.sec(-4.859 - 100 * PERIOD)).thenReturn(6.84526628393);
        when(systemMock.csc(-4.859 - 100 * PERIOD)).thenReturn(1.01084449975);

        //when(systemMock.system(-4.991)).thenReturn(25.579);
        when(systemMock.sin(-4.991)).thenReturn(0.96143836369);
        when(systemMock.cos(-4.991)).thenReturn(0.27502049525);
        when(systemMock.tan(-4.991)).thenReturn(3.49587896273);
        when(systemMock.cot(-4.991)).thenReturn(0.28605109349);
        when(systemMock.sec(-4.991)).thenReturn(3.63609264487);
        when(systemMock.csc(-4.991)).thenReturn(1.0401082771);

        //
        when(systemMock.sin(-4.991 - PERIOD)).thenReturn(0.96143836369);
        when(systemMock.cos(-4.991 - PERIOD)).thenReturn(0.27502049525);
        when(systemMock.tan(-4.991 - PERIOD)).thenReturn(3.49587896273);
        when(systemMock.cot(-4.991 - PERIOD)).thenReturn(0.28605109349);
        when(systemMock.sec(-4.991 - PERIOD)).thenReturn(3.63609264487);
        when(systemMock.csc(-4.991 - PERIOD)).thenReturn(1.0401082771);

        //
        when(systemMock.sin(-4.991 - 100 * PERIOD)).thenReturn(0.96143836369);
        when(systemMock.cos(-4.991 - 100 * PERIOD)).thenReturn(0.27502049525);
        when(systemMock.tan(-4.991 - 100 * PERIOD)).thenReturn(3.49587896273);
        when(systemMock.cot(-4.991 - 100 * PERIOD)).thenReturn(0.28605109349);
        when(systemMock.sec(-4.991 - 100 * PERIOD)).thenReturn(3.63609264487);
        when(systemMock.csc(-4.991 - 100 * PERIOD)).thenReturn(1.0401082771);

        //разрыв в -2пи
        when(systemMock.sin(-2.0 * PI + EPSILON)).thenReturn(0.0);
        when(systemMock.cos(-2.0 * PI + EPSILON)).thenReturn(1.0);
        when(systemMock.tan(-2.0 * PI + EPSILON)).thenReturn(0.0);
        when(systemMock.cot(-2.0 * PI + EPSILON)).thenReturn(Double.NaN);
        when(systemMock.sec(-2.0 * PI + EPSILON)).thenReturn(1.0);
        when(systemMock.csc(-2.0 * PI + EPSILON)).thenReturn(Double.NaN);

        ////////////

        //Функция монотонно убывает на всей ООФ
        //when(systemMock.system(0 + EPSILON)).thenReturn(Double.POSITIVE_INFINITY);
        when(systemMock.log_2(0 + EPSILON)).thenReturn(Double.NEGATIVE_INFINITY);
        when(systemMock.log_10(0 + EPSILON)).thenReturn(Double.NEGATIVE_INFINITY);

        //when(systemMock.system(0.0065)).thenReturn(0.0379);
        when(systemMock.log_2(0.0065)).thenReturn(-7.26534456652);
        when(systemMock.log_10(0.0065)).thenReturn(-2.18708664336);

        //when(systemMock.system(5)).thenReturn(0.001);
        when(systemMock.log_2(5)).thenReturn(2.32192809489);
        when(systemMock.log_10(5)).thenReturn(0.69897000433);


    }
}
