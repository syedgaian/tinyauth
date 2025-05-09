import { Button, Paper, Text } from "@mantine/core";
import { Layout } from "../components/layouts/layout";
import { useTranslation } from "react-i18next";

export const InternalServerError = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Paper shadow="md" p={30} mt={30} radius="md" withBorder>
        <Text size="xl" fw={700}>
          {t("internalErrorTitle")}
        </Text>
        <Text>{t("internalErrorSubtitle")}</Text>
        <Button fullWidth mt="xl" onClick={() => window.location.replace("/")}>
          {t("internalErrorButton")}
        </Button>
      </Paper>
    </Layout>
  );
};
