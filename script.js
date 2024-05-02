document.getElementById('add-member').addEventListener('click', function() {
    var familyMembersDiv = document.getElementById('family-members');
    var memberCount = familyMembersDiv.children.length / 2 + 1; // Considering each member has 2 elements (label & input)
    
    var fieldset = document.createElement('fieldset');
    fieldset.innerHTML = '<legend>Informations du membre de la famille ' + memberCount + '</legend>' +
                         '<label for="member-name-' + memberCount + '">Nom :</label>' +
                         '<input type="text" id="member-name-' + memberCount + '" placeholder="Nom" required><br>' +
                         '<label for="member-email-' + memberCount + '">Email :</label>' +
                         '<input type="email" id="member-email-' + memberCount + '" placeholder="Email" required><br>';
    
    familyMembersDiv.appendChild(fieldset);
  });
  
  document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Get the values from the form
    var mainName = document.getElementById('main-name').value;
    var mainEmail = document.getElementById('main-email').value;
    
    var familyMembers = [];
    var inputs = document.querySelectorAll('[id^="member-name-"]');
    inputs.forEach(function(input) {
      var memberNumber = input.id.split('-')[2];
      var memberName = document.getElementById('member-name-' + memberNumber).value;
      var memberEmail = document.getElementById('member-email-' + memberNumber).value;
      familyMembers.push({name: memberName, email: memberEmail});
    });
  
    // Display confirmation message
    var confirmation = document.getElementById('confirmation');
    confirmation.innerHTML = 'Le voyage a été réservé avec succès pour ' + mainName + ' (' + mainEmail + ')' +
                              ' et ' + familyMembers.length + ' autres membres de la famille.';
  });