package com.itmoprofessionals.softwaretest.lab1.domain.object;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public enum Colors {

    PINK, YELLOW, RED, GREEN, BLUE, GRAY, CYAN, BLACK, MAGENTA;

    private static final List<Colors> VALUES =
            Collections.unmodifiableList(Arrays.asList(values()));
    private static final int SIZE = VALUES.size();
    private static final Random RANDOM = new Random();

    public static Colors randomColor() {
        return VALUES.get(RANDOM.nextInt(SIZE));
    }
}
