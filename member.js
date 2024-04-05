function skillsMember() {
  const member = this;
  const skills = member.skills;
  const memberSkills = [];
  skills.forEach(function(skill) {
    memberSkills.push(skill.name);
  });
  return memberSkills;
}