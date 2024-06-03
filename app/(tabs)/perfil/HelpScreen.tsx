import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const faqs = [
  {
    question: '¿Cómo puedo empezar un desafío matemático?',
    answer: 'Para empezar un desafío, ve a la pantalla de inicio y selecciona el nivel que deseas jugar. A continuación, elige uno de los temas disponibles y comienza el desafío.',
  },
  {
    question: '¿Cómo se calculan los puntajes?',
    answer: 'Los puntajes se calculan en función de la dificultad del nivel y el número de respuestas correctas. Cuanto más alto sea el nivel y más respuestas correctas tengas, mayor será tu puntaje.',
  },
  {
    question: '¿Qué hago si encuentro un problema en la aplicación?',
    answer: 'Si encuentras un problema, puedes contactar a nuestro equipo de soporte a través de la sección "Ayuda y Soporte". Envíanos un mensaje con una descripción detallada del problema y te ayudaremos lo antes posible.',
  },
  {
    question: '¿Cómo puedo ver mis trofeos ganados?',
    answer: 'Para ver tus trofeos, ve a la pantalla "Trofeos" en la barra de navegación. Aquí podrás ver los trofeos que has ganado por cada nivel.',
  },
  {
    question: '¿Qué son las notificaciones y cómo las gestiono?',
    answer: ' Las notificaciones te mantienen informado sobre nuevos desafíos, mensajes de asesores y actualizaciones importantes. Puedes gestionar tus notificaciones desde la pantalla "Notificaciones" en el perfil.',
  },
  {
    question: '¿Cómo cierro sesión en la aplicación?',
    answer: 'Para cerrar sesión, ve a la pantalla de perfil y selecciona "Cerrar Sesión" al final del menú. Esto te desconectará de tu cuenta y te llevará de vuelta a la pantalla de inicio de sesión.',
  },
];

export default function Help() {
  return (
    <ScrollView style={styles.container}>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqContainer}>
          <Text style={styles.question}>{faq.question}</Text>
          <Text style={styles.answer}>{faq.answer}</Text>
        </View>
      ))}
      <Text style={styles.sectionTitle}>Contacta con Soporte</Text>
      <Text style={styles.text}>Correo: 20460159@colima.tecnm.mx</Text>
      <Text style={styles.text}>Teléfono: +123456789</Text>
      <Text style={styles.text}></Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E0F7FA', 
  },
  banner: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  faqContainer: {
    backgroundColor: '#ffebcd', 
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff6347', 
    marginBottom: 5,
  },
  answer: {
    fontSize: 18,
    color: '#000000', 
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff4500', 
    marginTop: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
  },
});
