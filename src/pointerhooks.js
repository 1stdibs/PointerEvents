/*!
 * jQuery Event Hook for PointerEvents
 * {@link http://learn.jquery.com/events/event-extensions/#jquery-event-fixhooks-object|jQuery Fix Hooks Objects}
 *
 * This plugin will ensure PointerEvent properties are carried over to jQuery events.
 * https://github.com/aarongloege/jquery.pointerHooks
 *
 * Copyright (c) 2014 Aaron Gloege
 * Licensed under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 */

/**
 * Created and modified by liliana on 1/8/15
 */

(function($) {
    'use strict';

    // events to fix
    var events = [
        'pointerenter',
        'pointerover',
        'pointerdown',
        'pointermove',
        'pointerup',
        'pointerout',
        'pointerleave',
        'pointercancel'
    ];

    var fixHook = {

        // properties to copy over to jQuery Event
        props: [
            'pageX',
            'pageY',
            'clientX',
            'clientY',
            'screenX',
            'screenY',
            'relatedTarget',
            'pointerId',
            'pointerType',
            'x',
            'y',
            'isPrimary',
            'width',
            'height',
            'tiltX',
            'tiltY',
            'pressure'
        ]
    };

    var i = 0;
    var length = events.length;

    for (; i < length; i++) {

        // check if hook exists before assigning properties
        if (!$.event.fixHooks[events[i]]) {
            $.event.fixHooks[events[i]] = fixHook;
        }
    }

}(jQuery)); // jshint ignore:line
