(() => {
  class NavbarController extends BaseController {
    constructor(HelpService, Auth, PromptService, UserService, Message, BroadcastService) {
      super();
      this.HelpService = HelpService;
      this.session = Auth.getSession();
      this.PromptService = PromptService;
      this.UserService = UserService;
      this.Message = Message;

      // Disable/Enable on quiz
      this.pointerEvents = true;

      BroadcastService.catch('quizStarted', () => {
        this.pointerEvents = false;
      });

      BroadcastService.catch('quizSubmitted', () => {
        this.pointerEvents = true;
      });
    }

    openReportProblem() {
      this.HelpService.openReportProblemModal();
    }

    openChangeEmail() {
      this.PromptService.open({
        title: 'Cambiar correo',
        size: 'md',
        confirmButtonText: 'Guardar cambios',
        inputs: [
          {
            label: 'Correo Actual',
            placeholder: '',
            map: 'email',
            type: 'email'
          },
          {
            label: 'Contraseña',
            placeholder: '',
            map: 'password',
            type: 'password'
          },
          {
            label: 'Correo Nuevo',
            placeholder: '',
            map: 'newEmail',
            type: 'email'
          }
        ]
      }).then((response) => {
        this.UserService.updateEmail(response).then((response) => {
          this.Message.show(response.msg || 'Su correo ha sido actualizado.');
        });
      });
    }

    openChangePassword() {
      this.PromptService.open({
        title: 'Cambiar contraseña',
        size: 'md',
        confirmButtonText: 'Guardar cambios',
        inputs: [
          {
            label: 'Contraseña Actual',
            placeholder: '',
            map: 'password',
            type: 'password'
          },
          {
            label: 'Nueva Contraseña',
            placeholder: '',
            map: 'new_password',
            type: 'password',
            minlength: 8
          },
          {
            label: 'Confirmar Nueva Contraseña',
            placeholder: '',
            type: 'password',
            minlength: 8,
            compareTo: 1,
            map: '_new_password',
            compareToErrorMessage: 'Las contraseñas no coinciden'
          }
        ]
      }).then((response) => {
        delete response._new_password;

        this.UserService.updatePassword(response).then((response) => {
          this.Message.show(response.msg || 'Su contraseña ha sido actualizada.');
        });
      });
    }
  }

  angular.module('app').controller('NavbarController', NavbarController);
})();
