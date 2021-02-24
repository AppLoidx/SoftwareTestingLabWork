package com.itmoprofessionals.softwaretest.text;

public class Dot implements Sparkabel {
    int dotId;
    boolean isSpark = false;

    public Dot (int dotId, boolean isSpark){
        this.dotId = dotId;
        this.isSpark = isSpark;
    }


    @Override
    public void spark(int dotId) {
        isSpark = true;
        System.out.println("Dot number "+ dotId +" sparkled");
    }

    @Override
    public void light() {

    }
}
