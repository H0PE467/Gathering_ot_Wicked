
// ------------ Elements from DOM ------------ //

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

// ------------ Variables ------------ //

// - Alive - //

is_maleficent_alive = false;
is_diablo_alive = false;
is_mother_gothel_alive = false;
is_brothers_stabbington_alive = false;
is_hades_alive = false;
is_pain_and_panic_alive = false;
is_the_queen_alive = false;
is_magic_mirror_alive = false;
is_king_john_alive = false;
is_sir_hiss_alive = false;
is_hook_alive = false;
is_smee_alive = false;
is_queen_of_hearts_alive = false;
is_king_of_hearts_alive  = false;
is_shere_kahn_alive = false;
is_lady_tremaine_alive = false;
is_drizzela_alive = false;
is_anastasia_alive = false;

// - Decisiones - //

hades_has_power = true;
thequeen_has_power = true;

is_the_crown_dead = false;
who_has_the_crown = 8;
previous_tower_protection = [];
tower_protected = -1;
is_queen_power_active = 0;

mischief_team = [];
mischief_decision = -1;

good_guys = [];
dead = [];
omision = [];
choices = [];

mode = 0;
stage = 0;

// ------------ Event Listeners ------------ //

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

continue_selection.addEventListener("click", next);

// ------------ Funciones ------------ //

// Menu //

function show_menu(){
    menu.style.display = 'block';
}

function hide_menu(){
    menu.style.display = 'none';
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
}

function show_character_selection(){
    character_selection.style.display = 'block';
}

function hide_character_selection(){
    character_selection.style.display = 'none';
}

// Four x Four //

function set_fxf(array, text){

    show_fxf();
    hide_character_selection();
    
    set_fxf_title(text)
    hide_choices_again();
    show_choices(array);
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
    fxf_display.style.display = 'block';
}

function hide_fxf(){
    fxf_display.style.display = 'none';
}

// Other //
function set_alive(id) {
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
    else if (id == 3) {
        is_brothers_stabbington_alive = true;
    }
    else if (id == 4) {
        is_hades_alive = true;
    }
    else if (id == 5) {
        is_pain_and_panic_alive = true;
    }
    else if (id == 6) {
        is_the_queen_alive = true;
    }
    else if (id == 7) {
        is_magic_mirror_alive = true;
    }
    else if (id == 8) {
        is_king_john_alive = true;
    }
    else if (id == 9) {
        is_sir_hiss_alive = true;
    }
    else if (id == 10) {
        is_hook_alive = true;
    }
    else if (id == 11) {
        is_smee_alive = true;
    }
    else if (id == 12) {
        is_queen_of_hearts_alive = true;
    }
    else if (id == 13) {
        is_king_of_hearts_alive = true;
    }
    else if (id == 14) {
        is_shere_kahn_alive = true;
    }
    else if (id == 15) {
        is_lady_tremaine_alive = true;
    }
    else if (id == 16) {
        is_drizzela_alive = true;
    }
    else if (id == 17) {
        is_anastasia_alive = true;
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
    else if (id == 3) {
        is_brothers_stabbington_alive = false;
    }
    else if (id == 4) {
        is_hades_alive = false;
    }
    else if (id == 5) {
        is_pain_and_panic_alive = false;
    }
    else if (id == 6) {
        is_the_queen_alive = false;
    }
    else if (id == 7) {
        is_magic_mirror_alive = false;
    }
    else if (id == 8) {
        is_king_john_alive = false;
    }
    else if (id == 9) {
        is_sir_hiss_alive = false;
    }
    else if (id == 10) {
        is_hook_alive = false;
    }
    else if (id == 11) {
        is_smee_alive = false;
    }
    else if (id == 12) {
        is_queen_of_hearts_alive = false;
    }
    else if (id == 13) {
        is_king_of_hearts_alive = false;
    }
    else if (id == 14) {
        is_shere_kahn_alive = false;
    }
    else if (id == 15) {
        is_lady_tremaine_alive = false;
    }
    else if (id == 16) {
        is_drizzela_alive = false;
    }
    else if (id == 17) {
        is_anastasia_alive = false;
    }
    
    // ---- Crown ---- //
    
    if (id == crown) {
        is_the_crown_dead = true;
    }

    // ---- Mischief Team ---- //

    for (i = 0; i < mischief_team.length; i++) {
        if (mischief_team[i] == id) {
            mischief_team.splice(i,1);
        }   
    }

}

function empty_choices(){
    choices = [];
}

function scroll_to_top() {
    window.scrollTo(0, 0);
}

function selected(id) {
    // Character Selection
    if (mode == 0) {
        set_alive(id);
        choices.push(id);
        set_selection(choices,'Eligan los personajes que jugaran');
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
        set_selection(choices,'Malhechores eligan sus personajes');
    }
    // Maleficient Search Choice
    else if (mode == 2) {
        choices.push(id);
        setTimeout(next, 1000);
    }
    // Mother Gothel Protection
    else if (mode == 3) {
        tower_protected = id;
        previous_tower_protection = [id];
        next();
    }
    // Mischief Decision
    else if (mode == 4) {
        mischief_decision = id;
        if (mischief_decision == tower_protected) {
            mischief_decision = -1;
        }
        next();
    }
    // Hades Decision
    else if (mode == 5) {
        if (id = 100) {
            mischief_decision = -1;
            hades_has_power = false;
        }
        next();
    }
    else if (mode == 6) {
        if (id = 100) {
            mischief_decision = -1;
            thequeen_has_power = false;
        }
        next();
    }
    else if (mode == 7) {
        console.log(id);
    }
}

// ------------ Main ------------ //

set_title_selection('hello');

show_menu();

function next() {

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
        set_selection(choices,"Malhechores eligan sus personajes");
    }
    else if (stage == 1) {
        if (is_maleficent_alive) {
            mode = 2;
            stage = 2;
            empty_choices();
            
            scroll_to_top();
            set_selection([0,1],"Maléfica elige a quien investigar esta noche");
        }else{
            mode = 3;
            stage = 4;
            next();
        }
    }
    else if (stage == 2) {
        hide_character_selection();
        set_fxf(choices,"Malefica eligio a este personaje para investigar")
        mode = 3;
        stage = 3;
        setTimeout(next, 1000);
    }
    else if (stage == 3) {
        set_fxf([0,1],"Diaval le dice a Malefica si era bueno o mlao")
        stage = 4;
        setTimeout(next, 1000);
    }
    else if (stage == 4) {
        stage = 5;
        empty_choices();
        set_selection(previous_tower_protection,"La Madre Gothel elige a quien proteger esta noche")
    }
    else if (stage == 5) {
        mode = 4;
        stage = 6;
        set_selection(mischief_team,"Los malhechores deciden a quien matar esta noche");
    }
    else if (stage == 6) {
        stage = 7;
        mode = 5;
        if (mischief_decision != -1) {
            set_fxf([mischief_decision], "Hades, Los Malhechores matarn a este jugador, quieres salvarlo?")
        }
        else{
            set_fxf([], "Hades,Los Malhechores matarn a este jugador, quieres salvarlo?")
        }
    }
    else if (stage == 7) {
        stage = 8;
        mode = 6;

        if (mischief_decision != -1) {
            set_fxf([mischief_decision], "Reina, Los Malhechores matarn a este jugador, quieres salvarlo?")
        }
        else{
            set_fxf([], "Reina, Los Malhechores mataran a este jugador, quieres salvarlo?")
        }
    }
    else if(stage == 8){
        stage = 9;
        mode = 7;

        if (mischief_decision != -1) {
            set_fxf([mischief_decision], "Este jugador a muerto");
            kill(mischief_decision);
        }
        else{
            set_fxf([], "Los Malhechores no han matado a nadie esta ronda")
        }
        
    }
}

function main() {
    hide_menu();

    set_selection(choices,"Eligan los personajes que jugaran");
}









