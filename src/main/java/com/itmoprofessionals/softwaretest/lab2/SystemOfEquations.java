package com.itmoprofessionals.softwaretest.lab2;

import static java.lang.Math.*;

public class SystemOfEquations {

    static final double PRECISION = 0.001;

/*  x <= 0 : (((((tan(x) + csc(x)) * cos(x)) ^ 3) ^ 3) / (((cot(x) / sec(x)) + sin(x)) * cos(x)))
    x > 0 : (((((ln(x) * ln(x)) + log_10(x)) / ln(x)) * (log_2(x) - (log_10(x) + ln(x)))) ^ 2)*/

    private static double sin(double x, double current, int n, double result) {
        if (abs(current) < PRECISION) return result;
        return sin(x, current * (-x * x / (2.0 * n * (2.0 * n + 1.0))), n + 1, result + current);
    }

    public static double sin(double x) {
        double x1 = x % (2 * PI);
        if (abs(abs(x1) - PI) < PRECISION || abs(abs(x1) - 2 * PI) < PRECISION || abs(abs(x1) - 0.0) < PRECISION) {
            return 0.0;
        }
        return sin(x1, x1, 1, 0);
    }

    public static double cos(double x) {
        int sign;
        if (((x % (2.0 * PI)) < PI / 2) && ((x % (2.0 * PI)) > -PI / 2) ||
                ((x % (2.0 * PI)) < -1.5 * PI) || ((x % (2.0 * PI)) > 1.5 * PI)
        ) {
            sign = 1;
        } else {
            sign = -1;
        }
        return sqrt(1.0 - sin(x) * sin(x)) * sign;
    }

    public static double tan(double x) {
        return sin(x) / SystemOfEquations.cos(x);
    }

    public static double csc(double x) {
        return 1 / sin(x);
    }

    public static double cot(double x) {
        return 1 / SystemOfEquations.tan(x);
    }

    public static double sec(double x) {
        return 1 / SystemOfEquations.cos(x);
    }

    public static double ln(double x) {
        if (x <= 0)
            return Double.NaN;
        double x1 = (x - 1) / (x + 1);
        double current = x1;
        double result = 0.0;
        int n = 3;
        while (abs(2 * current) > PRECISION / 10) {
            result += 2 * current;
            current *= x1 * x1 / n * (n - 2);
            n += 2;
        }
        return result;
    }

    public static double log_2(double x) {
        return ln(x) / ln(2.0);
    }

    public static double log_10(double x) {
        return ln(x) / ln(10.0);
    }

    public double system(double x) {
        double equation;
        if (x > 0) equation = (pow(((((ln(x) * ln(x)) + log_10(x)) / ln(x)) * (log_2(x) - (log_10(x) + ln(x)))), 2));
        else equation = ((pow((pow(((tan(x) + csc(x)) * cos(x)), 3)), 3)) / (((cot(x) / sec(x)) + sin(x)) * cos(x)));

        return equation;
    }
}
