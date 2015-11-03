/*
            Safari, in Private Browsing Mode, seems like does not allow localStorage.
            All calls to localStorage.setItem throw QuotaExceededError.
            This function is used to handle this during login,
            display a popup informing the user and halt the login process.
        */
        this.isLocalStorageSupported = function() {
            if (typeof localStorage === 'object') {
                try {
                    localStorage.setItem('localStorage', 1);
                    localStorage.removeItem('localStorage');
                    return true;
                } catch (e) {
                    //console.log("Local storage not supported");
                    modalService.openModal({
                        controller: 'showTipModalCtrl',
                        templateUrl: 'sportkix_modules/shared/partials/showTip.html',
                        windowClass: 'notification-modal',
                        backdrop: true,
                        keyboard: false,
                        resolve: {
                            data: function() {
                                return {
                                    msgBody: '<p>Login is not supported in "Private Browsing Mode". Please quit Private Browsing or try a different browser.</p>',
                                    okBtnTxt: 'Ok, got it.'
                                }
                            }
                        }
                    }).then(function() {
                        return false;
                    });
                }
            }
        };