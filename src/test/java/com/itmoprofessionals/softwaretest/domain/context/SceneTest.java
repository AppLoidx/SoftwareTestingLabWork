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

        Scene scene = new Scene("Untitled");

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

        // TODO :
        //  слишком топорный тест!
        //  Хотелось бы минимум сравнений из description,
        //  так как текст часто может меняться
        // TODO :
        //  Также немного смущают сообщения типа "Sun number 2 is appeared" в которых
        //  number по сути является id PhysicalObject

        assertEquals("Dot number 1 is appeared", events.get(0).getDescription());
        assertEquals(EventType.APPEAR, events.get(0).getEventType());

        assertEquals("Dot number 1 sparkled", events.get(1).getDescription());
        assertEquals(EventType.SPARK, events.get(1).getEventType());

        assertEquals("Sun number 2 is appeared", events.get(2).getDescription());
        assertEquals(EventType.APPEAR, events.get(2).getEventType());

        assertEquals("Sun number 3 is appeared", events.get(3).getDescription());
        assertEquals(EventType.APPEAR, events.get(3).getEventType());

        assertEquals("Sun number 2 start burning", events.get(4).getDescription());
        assertEquals(EventType.BURN, events.get(4).getEventType());

        assertEquals("Sun number 3 start burning", events.get(5).getDescription());
        assertEquals(EventType.BURN, events.get(5).getEventType());

        assertEquals(EventType.LIGHT, events.get(6).getEventType());


    }

    @Test
    public void sceneDescription() {
        // TODO write test with Mockito:
        //  1. Mock sceneDescription method
        //  2. Assert that EventProcessor is called for each event correctly (in right order)

        Scene scene = new Scene("Untitled");

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

        System.out.println(scene.sceneDescription());
    }
}