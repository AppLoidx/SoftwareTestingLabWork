package com.itmoprofessionals.softwaretest.domain.context;

import com.itmoprofessionals.softwaretest.domain.object.Dot;
import com.itmoprofessionals.softwaretest.domain.object.Flash;
import com.itmoprofessionals.softwaretest.domain.object.Sun;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.LinkedList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.*;

class SceneTest {

    /**
     * Creates a scene instance with 7 actions and 4 subjects
     *
     * @return a scene instance
     */
    public static Scene createSampleScene() {
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

        return scene;
    }

    @Test
    public void amountOfEventsTest() {
        Scene scene = createSampleScene();
        assertEquals(7, scene.getEvents().size());
    }

    @Test
    public void eventProcessingCallTest() {

        Scene scene = new Scene("Untitled");


        // В полной темноте сверкнула ослепительно яркая точка света.

        Dot dot = new Dot(1, false);
        Sun sun1 = new Sun(2, true);
        Sun sun2 = new Sun(3, true);
        Flash flashFromSun = new Flash(4);

        EventProcessor eventProcessorMock = Mockito.mock(EventProcessor.class);

        scene.setEventProcessor(eventProcessorMock);
        List<Action> actions = List.of(
                dot::appear,
                dot::spark,
                sun1::appear,
                sun2::appear,
                sun1::burn,
                sun2::burn,
                flashFromSun::light
        );

        actions.forEach(scene::applyAction);
        when(eventProcessorMock.processEvent(any(Event.class)))
                .thenReturn("Processed event description mock");
        scene.sceneDescription();

        verify(eventProcessorMock, times(actions.size())).processEvent(any(Event.class));

    }

    @Test
    public void sceneSequenceTest() {

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

        assertAll(() -> assertEquals("Dot number 1 is appeared", events.get(0).getDescription()),
                () -> assertEquals(EventType.APPEAR, events.get(0).getEventType()),

                () -> assertEquals("Dot number 1 sparkled", events.get(1).getDescription()),
                () -> assertEquals(EventType.SPARK, events.get(1).getEventType()),

                () -> assertEquals("Sun number 2 is appeared", events.get(2).getDescription()),
                () -> assertEquals(EventType.APPEAR, events.get(2).getEventType()),

                () -> assertEquals("Sun number 3 is appeared", events.get(3).getDescription()),
                () -> assertEquals(EventType.APPEAR, events.get(3).getEventType()),

                () -> assertEquals("Sun number 2 start burning", events.get(4).getDescription()),
                () -> assertEquals(EventType.BURN, events.get(4).getEventType()),

                () -> assertEquals("Sun number 3 start burning", events.get(5).getDescription()),
                () -> assertEquals(EventType.BURN, events.get(5).getEventType()),

                () -> assertEquals(EventType.LIGHT, events.get(6).getEventType()));


    }
}