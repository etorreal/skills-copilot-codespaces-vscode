function skillMembers() {
    var members = [
        { name: 'John', skill: 'JavaScript' },
        { name: 'Jane', skill: 'JavaScript' },
        { name: 'Doe', skill: 'JavaScript' },
        { name: 'Smith', skill: 'JavaScript' }
    ];

    var result = members.filter(function(member) {
        return member.skill === 'JavaScript';
    });

    console.log(result);
}