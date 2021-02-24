package com.itmoprofessionals.softwaretest.text;

import java.util.Objects;

import static com.itmoprofessionals.softwaretest.text.Colors.randomColor;

public class Flash extends Spark {
    private int flashId;
    private String color;


    @Override
    public void spark() {
    }

    @Override
    public void light() {
        color = String.valueOf(randomColor());
        System.out.println("Flash number " + flashId + " start shining in " + color + " color");
    }

    public int getFlashId() {
        return flashId;
    }

    public String getColor() {
        return color;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Flash flash = (Flash) o;
        return flashId == flash.flashId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(flashId);
    }
}
