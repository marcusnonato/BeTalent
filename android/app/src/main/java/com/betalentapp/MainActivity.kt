package com.betalentapp

import android.os.Bundle
import com.zoontek.rnbootsplash.RNBootSplash
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Inicializa a Splash Screen com o tema correto
        RNBootSplash.init(this, R.style.BootTheme) // Passa o tema BootTheme aqui
    }

    /**
     * Retorna o nome do componente principal registrado no JavaScript. Esse nome é usado para agendar
     * a renderização do componente.
     */
    override fun getMainComponentName(): String = "BeTalentApp"

    /**
     * Retorna a instância do [ReactActivityDelegate]. Usamos [DefaultReactActivityDelegate] que permite
     * habilitar a Nova Arquitetura com uma única flag booleana [fabricEnabled].
     */
    override fun createReactActivityDelegate(): ReactActivityDelegate =
        DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
