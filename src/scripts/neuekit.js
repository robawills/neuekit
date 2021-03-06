/*!---------------------------------------------------------------------------*\
    Neue Kit

    - Version:      1.0.2
    - Author:       Creative Little Dots
    - Site:         http://creativelittle.uk/neuekit
    - Copyright:    2020, Creative Little Dots
    – License:      MIT | http://goo.gl/p3bexl
\*----------------------------------------------------------------------------*/

/* Imports */
//import 'core-js/fn/symbol'; // TEMP FIX awaiting https://github.com/babel/babel/pull/8947

import Core     from './modules/core';
//import Fetcher  from './modules/fetcher';
import Modals   from './modules/modals';
import Tabs     from './modules/tabs';


/* Neue Kit */

export default function(options) {

    // Private: Default settings object
    const _defaults = {
        core: {},
        //fetcher: {},
        modals: {},
        tabs: {}
    };

    // Private: Merge passed in object with defaults
    const _settings = {
        ..._defaults,
        ...options
    };

    const _modules = {};

    // Public: Destroy module instance
    const destroy = () => {

        _modules.core.destroy();
        //_modules.fetcher.destroy();
        _modules.modals.destroy();
        _modules.tabs.destroy();
    };

    // Public: Destroy module instance and run initialise again
    const reinit = () => {

        destroy();
        init();
    };

    // Public: Initialise module
    function init() {

        _modules.core     = new Core(_settings.core);
        //_modules.fetcher  = new Fetcher(_settings.fetcher);
        _modules.modals   = new Modals(_settings.modals);
        _modules.tabs     = new Tabs(_settings.tabs);
    }

    return {
        destroy,
        reinit,
        init : init()
    }
};


