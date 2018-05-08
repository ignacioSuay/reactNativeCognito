function reducer(state, action) {

    if (state === undefined) {
        return {role: "anonymous"}
    }

    var role = state.role;

    switch (action.type) {
        case "addRole":
            return {role: role.concat(action.role)};
        case "removeRole":
            return {role: ["anonymous"]};
        default:
            return role;
    }
}

export default reducer;
