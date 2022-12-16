//============================================//
//                                            //
// ---------- ELEMENTS FROM DOM ------------- //
//                                            //
//============================================//

body = document.querySelector('*');

menu = document.getElementById('menu');
start_button = document.getElementById('start_button');

// - - -//

character_selection = document.getElementById('character_selection');

character_selection_title = document.getElementById('character_selection_title');

maleficent = document.getElementById('maleficent');
diablo = document.getElementById('diablo');
mother_gothel = document.getElementById('mother_gothel');
brothers_stabbington = document.getElementById('brothers_stabbington');
hades = document.getElementById('hades');
pain_and_panic = document.getElementById('pain_and_panic');
the_queen = document.getElementById('the_queen');
magic_mirror = document.getElementById('magic_mirror');
king_john = document.getElementById('king_john');
sir_hiss = document.getElementById('sir_hiss');
hook = document.getElementById('hook');
smee = document.getElementById('smee');
queen_of_hearts = document.getElementById('queen_of_hearts');
king_of_hearts = document.getElementById('king_of_hearts');
shere_kahn = document.getElementById('shere_kahn');
lady_tremaine = document.getElementById('lady_tremaine');
drizzela = document.getElementById('drizzela');
anastasia = document.getElementById('anastasia');

ct_zero = document.getElementById('ct-0');
ct_one = document.getElementById('ct-1');
ct_two = document.getElementById('ct-2');
ct_three = document.getElementById('ct-3');
ct_four = document.getElementById('ct-4');
ct_five = document.getElementById('ct-5');
ct_six = document.getElementById('ct-6');
ct_seven = document.getElementById('ct-7');
ct_eight = document.getElementById('ct-8');

continue_selection = document.getElementById('continue_selection');

// - - -//

fxf_display = document.getElementById('fxf_display');

fxf_title = document.getElementById('fxf_title');

maleficent_fxf = document.getElementById('maleficent_fxf');
diablo_fxf = document.getElementById('diablo_fxf');
mother_gothel_fxf = document.getElementById('mother_gothel_fxf');
brothers_stabbington_fxf = document.getElementById('brothers_stabbington_fxf');
hades_fxf = document.getElementById('hades_fxf');
pain_and_panic_fxf = document.getElementById('pain_and_panic_fxf');
the_queen_fxf = document.getElementById('the_queen_fxf');
magic_mirror_fxf = document.getElementById('magic_mirror_fxf');
king_john_fxf = document.getElementById('king_john_fxf');
sir_hiss_fxf = document.getElementById('sir_hiss_fxf');
hook_fxf = document.getElementById('hook_fxf');
smee_fxf = document.getElementById('smee_fxf');
queen_of_hearts_fxf = document.getElementById('queen_of_hearts_fxf');
king_of_hearts_fxf = document.getElementById('king_of_hearts_fxf');
shere_kahn_fxf = document.getElementById('shere_kahn_fxf');
lady_tremaine_fxf = document.getElementById('lady_tremaine_fxf');
drizzela_fxf = document.getElementById('drizzela_fxf');
anastasia_fxf = document.getElementById('anastasia_fxf');

save_choice = document.getElementById('save_choice');
kill_choice = document.getElementById('kill_choice');
mayhem_choice = document.getElementById('mayhem_choice');
mischief_choice = document.getElementById('mischief_choice');
choose_now = document.getElementById('choose_now');

reset_game = document.getElementById('reset_game');

//============================================//
//                                            //
// ---------------- VARIABLES ---------------- //
//                                            //
//============================================//

// - Alive - //

is_maleficent_alive = false;
is_diablo_alive = false;
is_mother_gothel_alive = false;
is_hades_alive = false;
is_the_queen_alive = false;
is_king_john_alive = false;
is_hook_alive = false;
is_queen_of_hearts_alive = false;
is_shere_kahn_alive = false;

// - Decisiones - //

hades_has_power = true;
thequeen_has_power = true;
queen_of_hearts_has_power = true;

hooks_prisoner = -1;
who_has_the_crown = 8;
previous_tower_protection = [];
tower_protected = -1;
is_queen_power_active = 0;

hangman_decision = -1;
mischief_team = [];
mischief_decision = -1;
queen_override = -1;

henchman = -1;
alive = [];
good_guys = [];
dead = [];
choices = [];

mode = 0;
stage = 0;

//============================================//
//                                            //
// ------------- EVENT LISTENERS ------------ //
//                                            //
//============================================//

maleficent.addEventListener("click", () => selected(0));
diablo.addEventListener("click", () => selected(1));
mother_gothel.addEventListener("click", () => selected(2))
brothers_stabbington.addEventListener("click", () => selected(3))
hades.addEventListener("click", () => selected(4))
pain_and_panic.addEventListener("click", () => selected(5))
the_queen.addEventListener("click", () => selected(6))
magic_mirror.addEventListener("click", () => selected(7))
king_john.addEventListener("click", () => selected(8))
sir_hiss.addEventListener("click", () => selected(9))
hook.addEventListener("click", () => selected(10))
smee.addEventListener("click", () => selected(11))
queen_of_hearts.addEventListener("click", () => selected(12))
king_of_hearts.addEventListener("click", () => selected(13))
shere_kahn.addEventListener("click", () => selected(14))
lady_tremaine.addEventListener("click", () => selected(15))
drizzela.addEventListener("click", () => selected(16))
anastasia.addEventListener("click", () => selected(17))

start_button.addEventListener("click", main);

choose_now.addEventListener("click", () => {
    clearInterval(voting_time);
    fade_fxf();
    setTimeout(next, 1000);
});

continue_selection.addEventListener("click", 
    () => {
    fade_selection();
    setTimeout(() => {
        next();
    }, 1000);
});

queen_of_hearts_fxf.addEventListener("click", () => selected(20));

save_choice.addEventListener("click", () => selected(100));
kill_choice.addEventListener("click", () => selected(200));

reset_game.addEventListener("click", reset);

//============================================//
//                                            //
// ---------------- FUNCTION ---------------- //
//                                            //
//============================================//


// Menu //

function show_menu(){
    menu.style.display = 'block';
}

function hide_menu(){
    menu.style.display = 'none';
}

function fade_menu() {
    i = 100;
    k = setInterval(()=>{
        
        if (i == 0) {
            menu.style.opacity = i;
            clearInterval(k);
        }else{
            menu.style.opacity = i/100;
            i= i-5;
        }
        
    },25)
}

// Character Selection //

function set_selection(array, text) {
    show_character_selection();
    hide_fxf();

    set_title_selection(text)

    show_selection_again();

    hide_unselectable(array);
    hide_unselectable(dead);

}

function set_title_selection(text) {
    character_selection_title.textContent = text;
}

function hide_unselectable(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            maleficent.style.display = 'none';
        }
        if (array[i] == 1) {
            diablo.style.display = 'none';
        }
        if (array[i] == 2) {
            mother_gothel.style.display = 'none';
        }
        if (array[i] == 3) {
            brothers_stabbington.style.display = 'none';
        }
        if (array[i] == 4) {
            hades.style.display = 'none';
        }
        if (array[i] == 5) {
            pain_and_panic.style.display = 'none';
        }
        if (array[i] == 6) {
            the_queen.style.display = 'none';
        }
        if (array[i] == 7) {
            magic_mirror.style.display = 'none';
        }
        if (array[i] == 8) {
            king_john.style.display = 'none';
        }
        if (array[i] == 9) {
            sir_hiss.style.display = 'none';
        }
        if (array[i] == 10) {
            hook.style.display = 'none';
        }
        if (array[i] == 11) {
            smee.style.display = 'none';
        }
        if (array[i] == 12) {
            queen_of_hearts.style.display = 'none';
        }
        if (array[i] == 13) {
            king_of_hearts.style.display = 'none';
        }
        if (array[i] == 14) {
            shere_kahn.style.display = 'none';
        }
        if (array[i] == 15) {
            lady_tremaine.style.display = 'none';
        }
        if (array[i] == 16) {
            drizzela.style.display = 'none';
        }
        if (array[i] == 17) {
            anastasia.style.display = 'none';
        }
    }

    if (maleficent.style.display == 'none' && diablo.style.display == 'none') {
        ct_zero.style.display = 'none';
    }
    if (mother_gothel.style.display == 'none' && brothers_stabbington.style.display == 'none') {
        ct_one.style.display = 'none';
    }
    if (hades.style.display == 'none' && pain_and_panic.style.display == 'none') {
        ct_two.style.display = 'none';
    }
    if (the_queen.style.display == 'none' && magic_mirror.style.display == 'none') {
        ct_three.style.display = 'none';
    }
    if (king_john.style.display == 'none' && sir_hiss.style.display == 'none') {
        ct_four.style.display = 'none';
    }
    if (hook.style.display == 'none' && smee.style.display == 'none') {
        ct_five.style.display = 'none';
    }
    if (queen_of_hearts.style.display == 'none' && king_of_hearts.style.display == 'none') {
        ct_six.style.display = 'none';
    }
    if (shere_kahn.style.display == 'none') {
        ct_seven.style.display = 'none';
    }
    if (lady_tremaine.style.display == 'none' && drizzela.style.display == 'none'&& anastasia.style.display == 'none') {
        ct_eight.style.display = 'none';
    }
}

function show_selection_again() { 
    maleficent.style.display = 'block';
    diablo.style.display = 'block';
    mother_gothel.style.display = 'block';
    brothers_stabbington.style.display = 'block';
    hades.style.display = 'block';
    pain_and_panic.style.display = 'block';
    the_queen.style.display = 'block';
    magic_mirror.style.display = 'block';
    king_john.style.display = 'block';
    sir_hiss.style.display = 'block';
    hook.style.display = 'block';
    smee.style.display = 'block';
    queen_of_hearts.style.display = 'block';
    king_of_hearts.style.display = 'block';
    shere_kahn.style.display = 'block';
    lady_tremaine.style.display = 'block';
    drizzela.style.display = 'block';
    anastasia.style.display = 'block';
    
    ct_zero.style.display = 'flex';
    ct_one.style.display = 'flex';
    ct_two.style.display = 'flex';
    ct_three.style.display = 'flex';
    ct_four.style.display = 'flex';
    ct_five.style.display = 'flex';
    ct_six.style.display = 'flex';
    ct_seven.style.display = 'flex';
    ct_eight.style.display = 'flex';
}

function show_character_selection(){
    character_selection.style.opacity = 1;
    character_selection.style.display = 'block';
}

function hide_character_selection(){
    character_selection.style.display = 'none';
}

function fade_selection() {
    i = 100;
    k = setInterval(()=>{
        
        if (i == 0) {
            character_selection.style.opacity = i;
            clearInterval(k);
        }else{
            character_selection.style.opacity = i/100;
            i= i-2;
        }
        
    },1)
}

// Four x Four //

function set_fxf(array, text, mode){

    show_fxf();
    hide_character_selection();
    
    set_fxf_title(text)
    hide_choices_again();
    show_choices(array);

    save_choice.style.display = "none";
    kill_choice.style.display = "none";
    mayhem_choice.style.display = "none";
    mischief_choice.style.display = "none";
    choose_now.style.display = "none";

    if (mode == "mayhem") {
        mayhem_choice.style.display = "block";

    }else if (mode == "mischief") {
        mischief_choice.style.display = "block";

    }else if (mode == "loyalty") {
        mayhem_choice.style.display = "block";
        mischief_choice.style.display = "block";

    }else if (mode == "choice") {
        save_choice.style.display = "block";
        kill_choice.style.display = "block";
    }else if (mode == "meeting") {
        choose_now.style.display = "block";
    }
}

function set_fxf_title(text) {
    fxf_title.textContent = text;
}

function show_choices(array){
    for (i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            maleficent_fxf.style.display = 'block';
        }
        if (array[i] == 1) {
            diablo_fxf.style.display = 'block';
        }
        if (array[i] == 2) {
            mother_gothel_fxf.style.display = 'block';
        }
        if (array[i] == 3) {
            brothers_stabbington_fxf.style.display = 'block';
        }
        if (array[i] == 4) {
            hades_fxf.style.display = 'block';
        }
        if (array[i] == 5) {
            pain_and_panic_fxf.style.display = 'block';
        }
        if (array[i] == 6) {
            the_queen_fxf.style.display = 'block';
        }
        if (array[i] == 7) {
            magic_mirror_fxf.style.display = 'block';
        }
        if (array[i] == 8) {
            king_john_fxf.style.display = 'block';
        }
        if (array[i] == 9) {
            sir_hiss_fxf.style.display = 'block';
        }
        if (array[i] == 10) {
            hook_fxf.style.display = 'block';
        }
        if (array[i] == 11) {
            smee_fxf.style.display = 'block';
        }
        if (array[i] == 12) {
            queen_of_hearts_fxf.style.display = 'block';
        }
        if (array[i] == 13) {
            king_of_hearts_fxf.style.display = 'block';
        }
        if (array[i] == 14) {
            shere_kahn_fxf.style.display = 'block';
        }
        if (array[i] == 15) {
            lady_tremaine_fxf.style.display = 'block';
        }
        if (array[i] == 16) {
            drizzela_fxf.style.display = 'block';
        }
        if (array[i] == 17) {
            anastasia_fxf.style.display = 'block';
        }
    }
}

function hide_choices_again() {
    maleficent_fxf.style.display = 'none';
    diablo_fxf.style.display = 'none';
    mother_gothel_fxf.style.display = 'none';
    brothers_stabbington_fxf.style.display = 'none';
    hades_fxf.style.display = 'none';
    pain_and_panic_fxf.style.display = 'none';
    the_queen_fxf.style.display = 'none';
    magic_mirror_fxf.style.display = 'none';
    king_john_fxf.style.display = 'none';
    sir_hiss_fxf.style.display = 'none';
    hook_fxf.style.display = 'none';
    smee_fxf.style.display = 'none';
    queen_of_hearts_fxf.style.display = 'none';
    king_of_hearts_fxf.style.display = 'none';
    shere_kahn_fxf.style.display = 'none';
    lady_tremaine_fxf.style.display = 'none';
    drizzela_fxf.style.display = 'none';
    anastasia_fxf.style.display = 'none';  
}

function show_fxf(){
    fxf_display.style.opacity = 1;
    fxf_display.style.display = 'block';
}

function hide_fxf(){
    fxf_display.style.display = 'none';
}

function fade_fxf() {
    i = 100;
    k = setInterval(()=>{
        
        if (i == 0) {
            fxf_display.style.opacity = i;
            clearInterval(k);
        }else{
            fxf_display.style.opacity = i/100;
            i= i-5;
        }
        
    },25)
}

// Other //
function set_alive(id) {
    alive.push(id);
    good_guys.push(id);
    if (id == 0) {
        is_maleficent_alive = true;
    }
    else if (id == 1) {
        is_diablo_alive = true;
    }
    else if (id == 2) {
        is_mother_gothel_alive = true;
    }
    else if (id == 4) {
        is_hades_alive = true;
    }
    else if (id == 6) {
        is_the_queen_alive = true;
    }
    else if (id == 8) {
        is_king_john_alive = true;
    }
    else if (id == 10) {
        is_hook_alive = true;
    }
    else if (id == 12) {
        is_queen_of_hearts_alive = true;
    }
    else if (id == 14) {
        is_shere_kahn_alive = true;
    }
}

function kill(id){
    if (id == 0) {
        is_maleficent_alive = false;
    }
    else if (id == 1) {
        is_diablo_alive = false;
    }
    else if (id == 2) {
        is_mother_gothel_alive = false;
    }
    else if (id == 4) {
        is_hades_alive = false;
    }
    else if (id == 6) {
        is_the_queen_alive = false;
    }
    else if (id == 8) {
        is_king_john_alive = false;
    }
    else if (id == 10) {
        is_hook_alive = false;
    }
    else if (id == 12) {
        is_queen_of_hearts_alive = false;
    }
    else if (id == 14) {
        is_shere_kahn_alive = false;
    }
    dead.push(id);
    

    // ---- Mischief Team ---- //

    for (i = 0; i < mischief_team.length; i++) {
        if (mischief_team[i] == id) {
            mischief_team.splice(i,1);
        }   
    }

    // ---- Mayhem Team ---- //

    for (i = 0; i < good_guys.length; i++) {
        if (good_guys[i] == id) {
            good_guys.splice(i,1);
        }   
    }

}

function empty_choices(){
    choices = [];
}

function scroll_to_top() {
    window.scrollTo(0, 0);
}

function show_wp(wallpaper) {
    document.getElementById(wallpaper).style.display = "block";
}

function hide_wp(wallpaper) {
    document.getElementById(wallpaper).style.display = "none";
}

function playSound(sound_name) {
    let audio = new Audio("./assets/audios/" + sound_name + ".mp3");
    audio.play();
}

function stopSound() {
    audio.pause();
    audio.currentTime = 0;
}

function reset(){

    is_maleficent_alive = false;
    is_diablo_alive = false;
    is_mother_gothel_alive = false;
    is_hades_alive = false;
    is_the_queen_alive = false;
    is_king_john_alive = false;
    is_hook_alive = false;
    is_queen_of_hearts_alive = false;
    is_shere_kahn_alive = false;


    hades_has_power = true;
    thequeen_has_power = true;
    queen_of_hearts_has_power = true;

    hooks_prisoner = -1;
    who_has_the_crown = 8;
    previous_tower_protection = [];
    tower_protected = -1;
    is_queen_power_active = 0;

    hangman_decision = -1;
    mischief_team = [];
    mischief_decision = -1;
    queen_override = -1;

    good_guys = [];
    dead = [];
    choices = [];

    mode = 0;
    stage = 0;
    reset_game.style.display = "none";
    continue_selection.style.display = 'inline-block';

    fade_fxf();
    setTimeout(show_menu,1000);
}

//============================================//
//                                            //
// ---------------- SELECTED ---------------  //
//                                            //
//============================================//

function selected(id) {

    // Character Selection
    if (mode == 0) {
        set_alive(id);
        choices.push(id);
        set_selection(choices,'Elijan los personajes que jugaran y luego presionen continuar');
    }
    // Mischief Team Meeting
    else if (mode == 1) {
        mischief_team.push(id);
        choices.push(id);

        for (i = 0; i < good_guys.length; i++) {
            if (good_guys[i] == id) {
                good_guys.splice(i,1);
            }
        }
        set_selection(choices,'Malhechores elijan sus personajes y luego presionen continuar');
    }
    // Maleficient Search Choice
    else if (mode == 2) {
        choices.push(id);
        fade_selection();
        setTimeout(() => {hide_wp("maleficent_wp");}, 1000);
        setTimeout(next, 1000);
    }
    // Mother Gothel Protection Choice
    else if (mode == 3) {
        tower_protected = id;
        previous_tower_protection = [id];
        fade_selection();
        setTimeout(() => {hide_wp("mother_gothel_wp");}, 1000);
        setTimeout(next, 1000);
    }
    // Mischief Choice
    else if (mode == 4) {
        mischief_decision = id;
        if (mischief_decision == tower_protected) {
            mischief_decision = -1;
        }
        fade_selection();
        setTimeout(next, 1000);
    }
    // Hades Decision
    else if (mode == 5) {
        if (id == 100) {
            mischief_decision = -1;
            hades_has_power = false;
        }
        fade_fxf();
        setTimeout(() => {hide_wp("hades_wp");}, 1000);
        setTimeout(next, 1000);
    }
    // The Queen Decision
    else if (mode == 6) {
        if (id == 100) {
            mischief_decision = -1;
            thequeen_has_power = false;
            is_queen_power_active = true;
            stage = 8;
        }
        fade_fxf();
        setTimeout(() => {hide_wp("the_queen_fxf_wp");}, 1000);
        setTimeout(next, 1000);
    }
    // The Queen Choice
    else if (mode == 7) {
        queen_override = id;
        fade_selection();
        setTimeout(() => {hide_wp("the_queen_wp");}, 1000);
        setTimeout(next, 1000);
    }
    // New Crown Choice
    else if (mode == 8) {
        who_has_the_crown = id;
        fade_selection();
        setTimeout(() => {hide_wp("crown_wp");}, 1000);
        setTimeout(next, 1000);
    }
    // Hooks Prisoner Choice
    else if(mode == 9){
        hooks_prisoner = id;
        fade_selection();
        setTimeout(() => {hide_wp("hook_wp");}, 1000);
        setTimeout(next, 1000);
    }
    // Hangman Choice
    else if(mode == 10){
        hangman_decision = id;
        fade_selection();
        setTimeout(next, 1000);
    }
    // New Crown Choice
    else if(mode == 11){
        who_has_the_crown = id;
        fade_selection();
        setTimeout(() => {hide_wp("crown_wp");}, 1000);
        setTimeout(next, 1000);
    }
    // Queen of Hearts Choice 
    else if (mode == 12) {
        empty_choices();
        choices.push(id);
        fade_selection();
        setTimeout(() => {hide_wp("queen_of_hearts_wp");}, 1000);
        setTimeout(next, 1000);
    }
    // Queen of Hearts Decision 
    else if (mode == 13) {
        if (id == 100) {
            hangman_decision = -1;
        }else{
            hangman_decision = choices[0];
        }
        fade_fxf();
        setTimeout(() => {hide_wp("queen_of_hearts_fxf_wp");}, 1000);
        setTimeout(next, 1000);
    }
    else if (mode == 14) {
        if (id == 100) {
            stage = 16;
        }else{
            stage = 22;
        }
        fade_fxf();
        setTimeout(next, 1000);
    }
    else if (mode == 15) {
        if (id == 100) {
            stage = 25;
        }else{
            stage = 24;
        }
        fade_fxf();
        setTimeout(next, 1000);
    }
    else if (mode == 16) {
        if (id == 100) {
            stage = 16;
        }else{
            stage = 26;
        }
        fade_fxf();
        setTimeout(next, 1000);
    }
    // Next Override
    else if(mode == 100){
        fade_selection();
        setTimeout(next, 1000);
    }
    // Queen of Hearts Power
    if (id == 20) {
        stage = 19;
        queen_of_hearts_has_power = false;
        clearInterval(voting_time);
        fade_fxf();
        setTimeout(next, 1000);
    }
}

//============================================//
//                                            //
// ----------------- STAGES ----------------- //
//                                            //
//============================================//


function next() {
    // Mischief Team Choice
    if (stage == 0) {
        mode = 1;
        stage = 1;

        for (i = 0; i < 18; i++) {
            if (!choices.includes(i)) {
                dead.push(i);
            }
        }

        empty_choices();
        scroll_to_top();
        set_selection(choices,"Malhechores elijan sus personajes y luego presionen continuar");
    }
    // Maleficient Choice
    else if (stage == 1) {

        continue_selection.style.display = 'none';

        if (is_maleficent_alive && is_diablo_alive) {
            mode = 2;
            stage = 2;
            empty_choices();
            scroll_to_top();
            show_wp("maleficent_wp");
            set_selection([0,1],"Elige a que personaje investigará Diaval esta noche");
        }else{
            stage = 4;
            next();
        }
    }
    // Diablo Reveal
    else if (stage == 2) {
        stage = 3;
        mode = 404;
        show_wp("diaval_wp");
        if (mischief_team.includes(choices[0])) {
            set_fxf(choices,"Maléfica eligió a este personaje para que lo investigaras", "mischief");
        }else{
            set_fxf(choices,"Maléfica eligió a este personaje para que lo investigaras", "mayhem");
        }
        setTimeout(() => {hide_wp("diaval_wp");}, 5000);
        setTimeout(next, 5000);
    }
    // Diablo Speaks
    else if (stage == 3) {
        stage = 4;
        show_wp("maleficent_diaval_wp");
        set_fxf([0,1],"Diaval, con una seña, puede decir la lealtad del personaje investigado o mentir","loyalty")
        setTimeout(() => {hide_wp("maleficent_diaval_wp");}, 5000);
        setTimeout(next, 5000);
    }
    // Mother Gothel Choice
    else if (stage == 4) {
        stage = 5;
        if (is_mother_gothel_alive) {
            mode = 3;
            empty_choices();
            show_wp("mother_gothel_wp");
            set_selection(previous_tower_protection,"Elige a quien encerrarás en tu torre, este personaje estará protegido de los malhechores")
        }else{
            next();
        }
    }
    // Mischief Choice
    else if (stage == 5) {
        scroll_to_top();
        mode = 4;
        stage = 6;
        set_selection(mischief_team,"Los malhechores deben decidir a quien matarán esta noche");
    }
    // Hades Decision
    else if (stage == 6) {
        stage = 7;
        if (is_hades_alive && hades_has_power) {
            show_wp("hades_wp");
            if (mischief_decision != -1) {
                mode = 5;
                set_fxf([mischief_decision], "Los Malhechores matarán a este jugador, ¿Quieres usar tu poder para salvarlo? (1 uso por partida)","choice")
            }
            else{
                mode = 404;
                set_fxf([], "Al parecer esta noche no habrá victima, ¿Talvez alguien más ya lo salvo?","choice");
                setTimeout(() => {hide_wp("hades_wp");}, 5000);
                setTimeout(next, 5000);
            }
        }else{
            next();
        }
        
    }
    // The Queen Decision
    else if (stage == 7) {
        stage = 9;
        if (is_the_queen_alive && thequeen_has_power) {
            show_wp("the_queen_fxf_wp");
            if (mischief_decision != -1 ) {
                mode = 6;
                set_fxf([mischief_decision], "Los Malhechores mataran a este jugador, ¿Quieres evitarlo e imponer tu autoridad? (1 uso por partida)","choice")
            }
            else{
                mode = 404;
                set_fxf([], "Al parecer esta noche no habrá victima, ¿Talvez alguien más ya lo salvo?","choice");
                setTimeout(() => {hide_wp("the_queen_fxf_wp");}, 5000);
                setTimeout(next, 5000);
            }
        }else{
            next();
        }
        
    }
    // The Queen Choice
    else if(stage == 8){
        stage = 10;
        mode = 7;
        show_wp("the_queen_wp");
        scroll_to_top();
        set_selection([6,mischief_decision],"¿Cuál lealtad decidiras revelar en su lugar?");
        
    }
    // Mischief Death
    else if (stage == 9) {
        stage = 11;
        mode = 404;
        if (mischief_decision != -1) {
            set_fxf([mischief_decision], "Esta noche, este jugador a muerto","mayhem");
            kill(mischief_decision);

            if (mischief_team.length >= good_guys.length) {
                stage = 50;
            }

        }
        else{
            set_fxf([], "Los Malhechores no han matado a nadie esta ronda","loyalty")
        }
        setTimeout(next, 3000);

    }
    // The Queen Reveal
    else if(stage == 10){
        stage = 11;
        mode = 404;
        show_wp("the_queen_fxf_wp");
        if (mischief_team.includes(queen_override)) {
            set_fxf([queen_override],"La Reina ha usado su poder para revelar un jugador, este malhechor ha sido descubierto y juzgado","mischief");
            kill(queen_override);
        }else{
            set_fxf([queen_override],"La Reina ha usado su poder para revelar un jugador, este vándalo ha quedado libre de duda","mayhem");
        }

        if(mischief_team.length == 0) {
            stage = 60;
        }
        setTimeout(() => {hide_wp("the_queen_fxf_wp");}, 5000);
        setTimeout(next, 5000);

    }
    // New Crown Choice
    else if (stage == 11) {
        stage = 12;
        if (dead.includes(who_has_the_crown)) {
            mode = 8;
            show_wp("crown_wp");
            set_selection([],"¡El rey ha muerto! Pero antes de morir, eligio un heredero que es...");
        }else{
            next();
        }
    }
    // Hooks Prisoner Choice
    else if (stage == 12) {
        scroll_to_top();
        stage = 13;
        if (is_hook_alive) {
            mode = 9;
            show_wp("hook_wp");
            set_selection([10],"¡El Capitán Garfio se apresura a tomar un prisionero!");
        }else{
            next();
        }
    }
    // Hangman Meeting
    else if(stage == 13){
        stage = 14;
        mode = 404;
        if (queen_of_hearts_has_power && is_queen_of_hearts_alive) {
            set_fxf([12], "La asamblea tiene 5 min para decidir a quien lincharán hoy","meeting");
        }else{
            set_fxf([], "La asamblea tiene 5 min para decidir a quien lincharán hoy","meeting");
        }

        voting_time = setTimeout(next, 20000);
    }
    // Hangman Choice
    else if (stage == 14) {
        stage = 15;
        mode = 10;
        set_selection([], "La asamblea vota y la persona a la que lincharan hoy será...");
    }
    // Hangman Death
    else if (stage == 15) {
        stage = 16;
        mode = 404;

        if (hangman_decision != -1) {
            if (mischief_team.includes(hangman_decision)) {
                set_fxf([hangman_decision],"¡Uno de los malhechores ha sido encontrado!", "mischief");
            }else{
                set_fxf([hangman_decision],"Un miembro inocente de la asamblea ha sido linchado", "mayhem");
                if (hangman_decision%2 == 0 && alive.includes(hangman_decision+1) && hangman_decision < 14) {
                    henchman = hangman_decision+1;
                    stage = 21;
                }else if(hangman_decision == 15){
                    if (alive.includes(16) && alive.includes(17)) { 
                        stage = 23;
                    } else if (alive.includes(16)) {
                        henchman = 16;
                        stage = 21;
                    } else{
                        henchman = 17;
                        stage = 21;
                    }
                }
            }
            kill(hangman_decision);


            if (mischief_team.length >= good_guys.length) {
                stage = 50;
            }else if (mischief_team.length == 0) {
                stage = 60;
            }
            setTimeout(next, 5000);
        }else{
            set_fxf([],"Nadie ha muerto este día", "loyalty");
            setTimeout(fade_fxf, 3000);
            setTimeout(next, 4000);
        }

    }
    // Hooks Prisoner Death
    else if(stage == 16){
        stage = 17;
        if (hangman_decision == 10) {
            mode = 404;
            if (mischief_team.includes(hooks_prisoner)) {
                set_fxf([hooks_prisoner],"El Capitán Garfio ha muerto pero no sin llevarse con él a su prisionero", "mischief");
            }else{
                set_fxf([hooks_prisoner],"El Capitán Garfio ha muerto pero no sin llevarse con él a su prisionero", "mayhem");
            }
            kill(hooks_prisoner);
            setTimeout(fade_fxf, 4000);
            setTimeout(next, 5000);
        }else{
            next();
        }
    }
    // New Crown Choice
    else if (stage == 17) {
        stage = 18;
        if (dead.includes(who_has_the_crown)) {
            mode = 11;
            show_wp("crown_wp");
            set_selection([],"¡El rey ha muerto! Pero antes de morir, eligio un heredero que es...");
        }else{
            next();
        }
    }
    // Shere Khan Scrath
    else if (stage == 18) {
        stage = 1;
        if (is_shere_kahn_alive) {
            mode = 404;
            set_fxf([14],"¡Shere Khan ataca con un zarpazo!","none");
            show_wp("claw_mark_wp");
            setTimeout(()=>{hide_wp("claw_mark_wp");}, 3000);
            setTimeout(next, 3000);
        }else{
            next();
        }
    }
    // Queen of Hearts Power
    else if (stage == 19) {
        stage = 20;
        mode = 12;
        show_wp("queen_of_hearts_wp");
        set_selection([12],"¡La Reina de Corazones ordena que le cortemos la cabeza a...!");
    }
    // Queen of Hearts Vote
    else if (stage == 20) {
        stage = 15;
        mode = 13;
        show_wp("queen_of_hearts_fxf_wp");
        set_fxf(choices,"¿Todos a favor de que le corten la cabeza?","choice");
    }
    // Henchaman Betrayal
    else if (stage == 21) {
        stage = 16;
        mode = 14;
        set_fxf([henchman],"¿Su secuaz acuso incorrectamente a su villano?","choice");
    }
    // Henchaman Dies
    else if (stage == 22) {
        stage = 16;
        mode = 404;
        if (mischief_team.includes(henchman)) {
            set_fxf([henchman],"Este secuaz ha traiciado injustamente a su villano y sufrio las consecuencias", "mischief");
        }else{
            set_fxf([henchman],"Este secuaz ha traiciado injustamente a su villano y sufrio las consecuencias", "mayhem");
        }
        kill(henchman);


        if (mischief_team.length >= good_guys.length) {
            stage = 50;
        }else if (mischief_team.length == 0) {
            stage = 60;
        }
        setTimeout(next, 5000);
    }
    // Lady Tremain Excepion
    else if (stage == 23){
        mode = 15;
        set_fxf([hangman_decision+1],"¿Su secuaz acuso incorrectamente a su villano?","choice");
    }
    else if (stage == 24) {
        stage = 25;
        mode = 404;
        if (mischief_team.includes(henchman)) {
            set_fxf([hangman_decision+1],"Este secuaz ha traiciado injustamente a su villano y sufrio las consecuencias", "mischief");
        }else{
            set_fxf([hangman_decision+1],"Este secuaz ha traiciado injustamente a su villano y sufrio las consecuencias", "mayhem");
        }
        kill(hangman_decision+1);


        if (mischief_team.length >= good_guys.length) {
            stage = 50;
        }else if (mischief_team.length == 0) {
            stage = 60;
        }
        setTimeout(next, 2500);
    }
    else if (stage == 25){
        mode = 16;
        set_fxf([hangman_decision+2],"¿Su secuaz acuso incorrectamente a su villano?","choice");
    }
    else if (stage == 26) {
        stage = 16;
        mode = 404;
        if (mischief_team.includes(henchman)) {
            set_fxf([hangman_decision+2],"Este secuaz ha traiciado injustamente a su villano y sufrio las consecuencias", "mischief");
        }else{
            set_fxf([hangman_decision+2],"Este secuaz ha traiciado injustamente a su villano y sufrio las consecuencias", "mayhem");
        }
        kill(hangman_decision+2);


        if (mischief_team.length >= good_guys.length) {
            stage = 50;
        }else if (mischief_team.length == 0) {
            stage = 60;
        }
        setTimeout(next, 2500);
    }
    // Mischief Win
    else if (stage == 50) {
        reset_game.style.display = "inline-block";
        set_fxf(mischief_team,"La Asamblea ha sido destruida. ¡Los Malhechores ganan!","mischief");
    }
    // Mayhem Win
    else if (stage == 60) {
        reset_game.style.display = "inline-block";
        set_fxf([],"La Asamblea ha triunfado. ¡Los Vándalos ganan!","mayhem");
    }
}

// ------------ Main ------------ //

function main() {
    hide_menu();
    set_selection(choices,"Elijan los personajes que jugaran y luego presionen continuar");
}

show_menu();
