<template>
<aside class="ml-3 d-flex flex-column">
        <div class="list-group mt-5 d-flex">
            <router-link to="/accountSettings"><span class="list-group-item aside-header"><strong>My Profile</strong></span></router-link>
            <router-link to="" class="list-group-item list-group-item-action"><i class="fa fa-history"></i> Shop History </router-link>
            <!-- TODO fix this (the list must be on right side and IT DOESNT WORK) -->
            <div class="dropdown">
                <div class=" dropdown-toggle list-group-item list-group-item-action" type="button" id="LanguageMenu" data-toggle="dropdown" >
                    <i class="fa fa-flag"></i> Language Preferences
                </div>
                <div class="dropdown-menu" aria-labelledby="LanguageMenu">
                    <a class="dropdown-item" href="#">Español</a>
                    <a class="dropdown-item" href="#">English</a>
                </div>
            </div>
            <router-link to="/accountSettingsEdit" class="list-group-item list-group-item-action"> <i class="fa fa-pencil"></i> Edit Profile</router-link>
            <!-- TODO -->
            <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-credit-card"></i> <i class="fa fa-paypal"></i> Add Payment Methods </a>
        </div>  
</aside>
</template>

<script>
export default {
    name: "AsideSettingMenu"
};
</script>

<style scope>
aside{
    text-align: start;
}
.aside-header{
    background: rgb(92, 212, 192, .2);
    font-weight: bold;
}
span{
    color:rgb(8, 45, 48);
    text-decoration:none;
}
</style>