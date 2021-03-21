package com.itmoprofessionals.softwaretest.lab1.domain.object;

import com.itmoprofessionals.softwaretest.lab1.domain.context.Event;

public abstract class Spark extends PhysicalObject {
    public Spark(int id) {
        super(id);
    }

    @Override
    public String getObjectTypeName() {
        return "Spark";
    }

    public abstract Event spark();

    public abstract Event light();
}
