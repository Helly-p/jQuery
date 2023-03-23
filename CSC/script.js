const country_state = {
    "India" : ["Kerala","Gujarat","Kashmir","Chhatishgarh"],
    "Russia" : ["Astrakhan","Moscow"],
    "America" : ["Texas","Callifornia","LA"]
}

const state_city = {
    "Astrakhan" : ["Altai"],
    "Moscow" : ["Khimki","Podolsk"],
    "Gujarat" : ["AHmedabad","SUrat","Vadodra"],
    "Kerala" : ["Wayand","Pune"],
    "Texas" : ["Texas", "Dallas"],
    "LA" : ["Utah"]
}

$(document).ready(function(){
    $('#country').on("change",function(){
        const selected_country = $("#country").find(':selected').val();
        let flag = 0;
        $('#state').removeAttr('disabled');
        $('#state').empty();
        $('#city').empty();
        let states = '<option selected disabled>Select State</option>';
        for (const country in country_state) {  

            if(country == selected_country){
                country_state[country].forEach(state => {
                    states += '<option value="' + state + '">' + state + '</option>'; 
                 });
                 flag = 1;
                 break;
            }
        }
        if(flag == 0){
            states = '<option> No States </option>'; 
        }
        $('#state').append(states);
        states = '';
    });

    $('#state').on("change",function(){
        const selected_state = $("#state").find(':selected').val();
        let flag = 0;

        $('#city').removeAttr('disabled');
        $('#city').empty();
        let cities = '<option selected disabled>Select City</option>';
        for (const state in state_city) {  

            if(state == selected_state){
                state_city[state].forEach(city => {
                    cities += '<option value="' + city + '">' + city + '</option>'; 
                 });
                 flag = 1;
                 break;
            }
        }

        if(flag == 0){
            cities = '<option> No Cities </option>'; 
        }
        $('#city').append(cities);
        cities = '';
    });


})