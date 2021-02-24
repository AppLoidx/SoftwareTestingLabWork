package com.itmoprofessionals.softwaretest.domain.object;

import com.itmoprofessionals.softwaretest.domain.context.Event;
import com.itmoprofessionals.softwaretest.domain.context.EventType;

import static com.itmoprofessionals.softwaretest.domain.object.Colors.randomColor;

public class Flash extends Spark {
    private String color;

    public Flash(int objectId) {
        super(objectId);
    }


    @Override
    public Event spark() {
        return Event.of("Flash number " + this.getId() + " sparkled", EventType.SPARK);

    }

    @Override
    public Event light() {
        color = String.valueOf(randomColor());
        return Event.of("Flash number " + this.getId() + " start shining in " + color + " color", EventType.LIGHT);
    }

    public String getColor() {
        return color;
    }

}
