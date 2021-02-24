package com.itmoprofessionals.softwaretest.domain.context;

import com.itmoprofessionals.softwaretest.domain.object.Dot;
import com.itmoprofessionals.softwaretest.domain.object.Flash;
import com.itmoprofessionals.softwaretest.domain.object.Sun;
import org.junit.jupiter.api.Test;

import java.util.LinkedList;

import static org.junit.jupiter.api.Assertions.*;

class SceneTest {

    @Test
    public void basicSceneTest() {
        Scene scene = new Scene();

        // В полной темноте сверкнула ослепительно яркая точка света.
        Dot dot = new Dot(1, false);
        Sun sun1 = new Sun(2, true);
        Sun sun2 = new Sun(3, true);
        Flash flashFromSun = new Flash(4);

        scene.applyAction(dot::appear);
        scene.applyAction(dot::spark);
        scene.applyAction(sun1::appear);
        scene.applyAction(sun2::appear);
        scene.applyAction(sun1::burn);
        scene.applyAction(sun2::burn);
        scene.applyAction(flashFromSun::light);

        LinkedList<Event> events = scene.getEvents();
        events.forEach(event -> System.out.println("[" + event.getEventType().toString() + "] " + event.getDescription()));
    }
}