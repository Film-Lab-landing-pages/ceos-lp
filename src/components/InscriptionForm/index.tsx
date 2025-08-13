"use client";

import React from "react";
import { IMaskInput } from "react-imask";
import { CloseButton, InscriptionContainer } from "./styles";
import { useInscriptionStore } from "@/store/store";
import { useRouter } from "next/navigation";
import axios from "axios";

import apiClient from "@/services/apiClient";

const InscriptionForm: React.FC = () => {
  const { isFormVisible, isActive, hideForm } = useInscriptionStore();
  const router = useRouter();

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Validar nome
    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    } else if (formData.name.length < 3) {
      newErrors.name = "Nome deve ter pelo menos 3 caracteres";
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    // Validar telefone (considera apenas dígitos)
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório";
    } else if (phoneDigits.length < 10) {
      newErrors.phone = "Telefone deve ter pelo menos 10 dígitos";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value; // Corrigido: usar .value
      setFormData((prevData) => ({ ...prevData, [field]: value }));

      // Remove erro específico quando começar a digitar
      if (errors[field]) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[field];
          return newErrors;
        });
      }
    };

  // Handler específico para IMaskInput
  const handlePhoneChange = (value: string) => {
    setFormData((prevData) => ({ ...prevData, phone: value }));

    // Remove erro do telefone quando começar a digitar
    if (errors.phone) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.phone;
        return newErrors;
      });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const formPayload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };

    console.log("Submitting form data:", formPayload);
    console.log("API Base URL:", apiClient.defaults.baseURL);

    try {
      /*    const leadResponse = await apiClient.post(`/leads`, formPayload);

      console.log("Form data submitted!", leadResponse.data);
 */
      const userResponse = await apiClient.post(`/users`, formPayload);

      console.log("User data submitted!", userResponse.data);

      setFormData({ name: "", email: "", phone: "" });
      router.push("/ceo-masterclass");
      hideForm();
    } catch (error) {
      console.error("Error submitting form:", error);

      if (axios.isAxiosError(error)) {
        if (error.response) {
          // Servidor respondeu com erro (4xx, 5xx)
          console.error("Response Status:", error.response.status);
          console.error("Response Data:", error.response.data);
          console.error("Response Headers:", error.response.headers);
        } else if (error.request) {
          // Requisição foi feita mas não houve resposta
          console.error("No response received. Request config:", {
            url: error.config?.url,
            method: error.config?.method,
            baseURL: error.config?.baseURL,
            timeout: error.config?.timeout,
          });
          console.error("Full request object:", error.request);
        } else {
          // Erro na configuração da requisição
          console.error("Request setup error:", error.message);
        }
        console.error("Error config:", error.config);
      } else {
        console.error("Non-Axios error:", error);
      }

      // Mostrar erro para o usuário (opcional)
      alert("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isFormVisible && (
        <InscriptionContainer
          id="inscription-form"
          className={isActive ? "active" : ""}
        >
          <form onSubmit={handleFormSubmit}>
            <CloseButton onClick={hideForm} className="close-button">
              ×
            </CloseButton>
            <input
              type="text"
              placeholder="Nome"
              value={formData.name}
              onChange={handleInputChange("name")}
            />
            <p className="error-message">{errors.name}</p>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange("email")}
            />
            <p className="error-message">{errors.email}</p>
            <IMaskInput
              mask="(00) 00000-0000"
              name="celular"
              placeholder="(99) 99999-9999"
              value={formData.phone}
              unmask={true}
              onAccept={handlePhoneChange}
            />
            <p className="error-message">{errors.phone}</p>
            <button type="submit">Inscrição</button>
          </form>
          <div onClick={hideForm} className="overlay"></div>
        </InscriptionContainer>
      )}
    </>
  );
};

export default InscriptionForm;
