package com.itmoprofessionals.softwaretest.text;

import static com.itmoprofessionals.softwaretest.text.Colors.randomColor;

public class Flash implements Sparkabel {
    int flashId;
    String color;


    @Override
    public void spark(int id) {
    }

    @Override
    public void light() {
        color = String.valueOf(randomColor());
        System.out.println("Flash number " + flashId + " start shining in " + color + " color");
    }
}
