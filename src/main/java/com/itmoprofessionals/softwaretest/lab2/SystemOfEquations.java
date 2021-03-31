package com.itmoprofessionals.softwaretest.lab2;

import java.io.*;

import static java.lang.Math.abs;
import static java.lang.Math.sqrt;
import static java.lang.Math.pow;
import static java.lang.Math.PI;

public class SystemOfEquations {

    static final double PRECISION = 0.001;

/*  x <= 0 : (((((tan(x) + csc(x)) * cos(x)) ^ 3) ^ 3) / (((cot(x) / sec(x)) + sin(x)) * cos(x)))
    x > 0 : (((((ln(x) * ln(x)) + log_10(x)) / ln(x)) * (log_2(x) - (log_10(x) + ln(x)))) ^ 2)*/

    private double sin(double x, double current, int n, double result) {
        if (abs(current) < PRECISION) return result;
        return sin(x, current * (-x * x / (2.0 * n * (2.0 * n + 1.0))), n + 1, result + current);
    }

    public double sin(double x) {
        double x1 = x % (2 * PI);
        if (abs(abs(x1) - PI) < PRECISION || abs(abs(x1) - 2 * PI) < PRECISION || abs(abs(x1) - 0.0) < PRECISION) {
            return 0.0;
        }
        return sin(x1, x1, 1, 0);
    }

    public double cos(double x) {
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

    public double tan(double x) {
        return sin(x) / cos(x);
    }

    public double csc(double x) {
        return 1 / sin(x);
    }

    public double cot(double x) {
        return 1 / tan(x);
    }

    public double sec(double x) {
        return 1 / cos(x);
    }

    public double ln(double x) {
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

    public double log_2(double x) {
        return ln(x) / ln(2.0);
    }

    public double log_10(double x) {
        return ln(x) / ln(10.0);
    }

    public double system(double x) {
        double equation;
        if (x > 0) equation = (pow(((((ln(x) * ln(x)) + log_10(x)) / ln(x)) * (log_2(x) - (log_10(x) + ln(x)))), 2));
        else equation = ((pow((pow(((tan(x) + csc(x)) * cos(x)), 3)), 3)) / (((cot(x) / sec(x)) + sin(x)) * cos(x)));

        return equation;
    }

    void createSCV(double from, double to, double step) {

        try (PrintWriter writer = new PrintWriter(new File("test.csv"))) {
            StringBuilder sb = new StringBuilder();
        double cur;
            cur = from;
            sb.append("X, Y, sin(X), cos(X), tan(X), cot(X), sec(X), csc(X), ln(X), log_2(X), log_10(X) \n");
        while (cur < to) {
            sb.append(cur).append(", ").append(system(cur)).append(", ").append(sin(cur)).append(", ").append(cos(cur))
                    .append(", ").append(tan(cur)).append(", ").append(cot(cur)).append(", ").append(sec(cur)).append(", ")
                    .append(csc(cur)).append(", ").append(ln(cur)).append(", ").append(log_2(cur)).append(", ").append(log_10(cur))
                    .append("\n");
            cur += step;
        }
        writer.write(sb.toString());
        writer.flush();
    } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
    }

