var stage;

var screen_multiInfoUse;

function init()
{
	document.addEventListener("DOMContentLoaded", allLoaded, false);
}

function allLoaded(event)
{
	document.removeEventListener("DOMContentLoaded", allLoaded, false);

	stage = {};

	stage.multiUseInfoScreen = {};


	var delay_test = setTimeout(libInit, 1000, "SOUND_GLOBAL");
}

function libInit(screenType)
{
	stage.multiUseInfoScreen.screenDefaults = {};

	stage.multiUseInfoScreen.screenDefaults.screen = document.querySelector(".multiUseInfo_cont_entrance");

	stage.multiUseInfoScreen.screenDefaults.title_line0 = document.querySelector(".multiUseInfo_entranceLine0");
	stage.multiUseInfoScreen.screenDefaults.title_line1 = document.querySelector(".multiUseInfo_entranceLine1");

	switch(screenType)
	{
		case "SOUND_GLOBAL":
		{
			stage.multiUseInfoScreen.soundMainOptions = {};

			stage.multiUseInfoScreen.soundMainOptions.soundTrue = document.querySelector(".multiUseInfo_sound_option_true");
			stage.multiUseInfoScreen.soundMainOptions.soundFalse = document.querySelector(".multiUseInfo_sound_option_false");

			break;
		}

		case "BATTLE_FAIL":
		{
			stage.multiUseInfoScreen.gameFailScreen = {};

			stage.multiUseInfoScreen.gameFailScreen.zombie = document.querySelector(".multiUseInfo_fail .multiUseInfo_fail_character");
			stage.multiUseInfoScreen.gameFailScreen.zombieLegs = document.querySelector(".multiUseInfo_fail .map-enemy_40x40-legs");
			stage.multiUseInfoScreen.gameFailScreen.zombieHead = document.querySelector(".multiUseInfo_fail .map-enemy_40x40-head");

			break;
		}
	}

	multiUseInfoScreen_drop(screenType);
}

function multiUseInfoScreen_drop(screenType)
{
	screen_multiInfoUse = {};
	screen_multiInfoUse.infoDisplay = screenType;

	stage.multiUseInfoScreen.screenDefaults.screen.addEventListener("webkitTransitionEnd", multiUseInfoScreen_dropEnd, false);
	stage.multiUseInfoScreen.screenDefaults.screen.addEventListener("transitionend", multiUseInfoScreen_dropEnd, false);

	stage.multiUseInfoScreen.screenDefaults.screen.classList.remove("multiUseInfo_cont_hide");
	stage.multiUseInfoScreen.screenDefaults.screen.classList.add("multiUseInfo_cont_show");
}

function multiUseInfoScreen_dropEnd(event)
{
	var endFunct;

	stage.multiUseInfoScreen.screenDefaults.screen.removeEventListener("webkitTransitionEnd", multiUseInfoScreen_dropEnd, false);
	stage.multiUseInfoScreen.screenDefaults.screen.removeEventListener("transitionend", multiUseInfoScreen_dropEnd, false);

	stage.multiUseInfoScreen.screenDefaults.title_line0.classList.remove("multiUseInfo_tl_hide");
	stage.multiUseInfoScreen.screenDefaults.title_line0.classList.add("multiUseInfo_tl_show");

	stage.multiUseInfoScreen.screenDefaults.title_line1.classList.remove("multiUseInfo_tl_hide");
	stage.multiUseInfoScreen.screenDefaults.title_line1.classList.add("multiUseInfo_tl_show");

	switch(screen_multiInfoUse.infoDisplay)
	{
		case "SOUND_GLOBAL":
		{
			endFunct = soundGlobalOptions_display;

			break;
		}

		case "BATTLE_FAIL":
		{
			endFunct = battleFail_display;

			break;
		}

		default:
		{
			endFunct = null;
		}
	}

	stage.multiUseInfoScreen.screenDefaults.title_line1.addEventListener("webkitTransitionEnd", endFunct, false);
	stage.multiUseInfoScreen.screenDefaults.title_line1.addEventListener("transitionend", endFunct, false);
}

// -------- GLOBAL_SOUND

function soundGlobalOptions_display(event)
{
	stage.multiUseInfoScreen.screenDefaults.title_line1.removeEventListener("webkitTransitionEnd", soundGlobalOptions_display, false);
	stage.multiUseInfoScreen.screenDefaults.title_line1.removeEventListener("transitionend", soundGlobalOptions_display, false);

	stage.multiUseInfoScreen.soundMainOptions.soundFalse.addEventListener("webkitTransitionEnd", soundGlobalOptions_displayEnd, false);
	stage.multiUseInfoScreen.soundMainOptions.soundFalse.addEventListener("transitionend", soundGlobalOptions_displayEnd, false);

	stage.multiUseInfoScreen.screenDefaults.title_line1.classList.remove("tween-multiUseInfo_cont_entrance_tl_delay");


	stage.multiUseInfoScreen.soundMainOptions.soundTrue.classList.remove("multiUseInfo_sound_option_hide");
	stage.multiUseInfoScreen.soundMainOptions.soundTrue.classList.add("multiUseInfo_sound_option_show");

	stage.multiUseInfoScreen.soundMainOptions.soundFalse.classList.remove("multiUseInfo_sound_option_hide");
	stage.multiUseInfoScreen.soundMainOptions.soundFalse.classList.add("multiUseInfo_sound_option_show");
}

function soundGlobalOptions_displayEnd(event)
{
	stage.multiUseInfoScreen.soundMainOptions.soundTrue.removeEventListener("webkitTransitionEnd", soundGlobalOptions_displayEnd, false);
	stage.multiUseInfoScreen.soundMainOptions.soundFalse.removeEventListener("transitionend", soundGlobalOptions_displayEnd, false);

	stage.multiUseInfoScreen.soundMainOptions.soundFalse.classList.remove("tween-multiUseInfo_sound_option_delay");

	soundGlobalOptions_btnInit(true);
}

function soundGlobalOptions_btnInit(run)
{
	if(run)
	{
		stage.multiUseInfoScreen.soundMainOptions.soundTrue.addEventListener("click", soundGlobalOptions_btnEvent, false);
		stage.multiUseInfoScreen.soundMainOptions.soundFalse.addEventListener("click", soundGlobalOptions_btnEvent, false);

		stage.multiUseInfoScreen.soundMainOptions.soundTrue.addEventListener("touchend", soundGlobalOptions_btnEvent, false);
		stage.multiUseInfoScreen.soundMainOptions.soundFalse.addEventListener("touchend", soundGlobalOptions_btnEvent, false);
	}

	else
	{
		stage.multiUseInfoScreen.soundMainOptions.soundTrue.removeEventListener("click", soundGlobalOptions_btnEvent, false);
		stage.multiUseInfoScreen.soundMainOptions.soundFalse.removeEventListener("click", soundGlobalOptions_btnEvent, false);

		stage.multiUseInfoScreen.soundMainOptions.soundTrue.removeEventListener("touchend", soundGlobalOptions_btnEvent, false);
		stage.multiUseInfoScreen.soundMainOptions.soundFalse.removeEventListener("touchend", soundGlobalOptions_btnEvent, false);

		stage.multiUseInfoScreen.soundMainOptions.soundTrue.classList.add("multiUseInfo_option_disabled");
		stage.multiUseInfoScreen.soundMainOptions.soundFalse.classList.add("multiUseInfo_option_disabled");
	}
}

function soundGlobalOptions_btnEvent(event)
{

	soundGlobalOptions_btnInit(false);

	for(var c = 0; c < event.target.classList.length; c++)
	{
		var cl = event.target.classList[c];

		if(cl === "multiUseInfo_sound_option_true" || cl === "multiUseInfo_sound_option_false")
		{
			if(cl === "multiUseInfo_sound_option_true")
			{
				stage.multiUseInfoScreen.soundMainOptions.soundFalse.classList.remove("multiUseInfo_sound_option_show");
				stage.multiUseInfoScreen.soundMainOptions.soundFalse.classList.add("multiUseInfo_sound_option_hide");
			}

			if(cl === "multiUseInfo_sound_option_false")
			{
				stage.multiUseInfoScreen.soundMainOptions.soundTrue.classList.remove("multiUseInfo_sound_option_show");
				stage.multiUseInfoScreen.soundMainOptions.soundTrue.classList.add("multiUseInfo_sound_option_hide");
			}
		}
	}

	multiUseInfoScreen_removeTitle();
}

// -------- GLOBAL_SOUND

// -------- BATTLE_FAIL

function battleFail_display()
{
	stage.multiUseInfoScreen.screenDefaults.title_line1.removeEventListener("webkitTransitionEnd", battleFail_display, false);
	stage.multiUseInfoScreen.screenDefaults.title_line1.removeEventListener("transitionend", battleFail_display, false);

	stage.multiUseInfoScreen.gameFailScreen.zombie.addEventListener("webkitTransitionEnd", battleFail_displayEnd, false);
	stage.multiUseInfoScreen.gameFailScreen.zombie.addEventListener("transitionend", battleFail_displayEnd, false);

	stage.multiUseInfoScreen.gameFailScreen.zombieLegs.classList.remove("tween-map-enemy_40x40_stop");
	stage.multiUseInfoScreen.gameFailScreen.zombieLegs.classList.add("tween-map-enemy_40x40_loop");

	stage.multiUseInfoScreen.gameFailScreen.zombie.classList.remove("multiUseInfo_fail_character_hide");
	stage.multiUseInfoScreen.gameFailScreen.zombie.classList.add("multiUseInfo_fail_character_show");
}

function battleFail_displayEnd(event)
{
	stage.multiUseInfoScreen.gameFailScreen.zombie.removeEventListener("webkitTransitionEnd", battleFail_displayEnd, false);
	stage.multiUseInfoScreen.gameFailScreen.zombie.removeEventListener("transitionend", battleFail_displayEnd, false);

	stage.multiUseInfoScreen.gameFailScreen.zombieHead.classList.add("map-enemy_40x40_head_fear");

	// TRIGGER TIMER
}

// -------- BATTLE_FAIL

function multiUseInfoScreen_removeTitle()
{
	stage.multiUseInfoScreen.screenDefaults.title_line0.classList.add("tween-multiUseInfo_cont_entrance_tl_delay");

	stage.multiUseInfoScreen.screenDefaults.title_line0.classList.remove("multiUseInfo_tl_show");
	stage.multiUseInfoScreen.screenDefaults.title_line0.classList.add("multiUseInfo_tl_hide");

	stage.multiUseInfoScreen.screenDefaults.title_line1.classList.remove("multiUseInfo_tl_show");
	stage.multiUseInfoScreen.screenDefaults.title_line1.classList.add("multiUseInfo_tl_hide");

	stage.multiUseInfoScreen.screenDefaults.title_line0.addEventListener("webkitTransitionEnd", multiUseInfoScreen_rise, false);

	stage.multiUseInfoScreen.screenDefaults.title_line0.addEventListener("transitionend", multiUseInfoScreen_rise, false);
}

function multiUseInfoScreen_rise(event)
{
	stage.multiUseInfoScreen.screenDefaults.title_line0.removeEventListener("webkitTransitionEnd", multiUseInfoScreen_rise, false);

	stage.multiUseInfoScreen.screenDefaults.title_line0.removeEventListener("transitionend", multiUseInfoScreen_rise, false);

	stage.multiUseInfoScreen.screenDefaults.screen.classList.remove("multiUseInfo_cont_show");
	stage.multiUseInfoScreen.screenDefaults.screen.classList.add("multiUseInfo_cont_hide");
}

init();