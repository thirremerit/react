import { Dimensions, Platform, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const cardMaxWidth = Math.min(360, windowWidth - 40);

export const colors = {
  background: "#0B1F3A",
  surface: "#0F172A",
  card: "#FFFFFF",
  textPrimary: "#F8FAFC",
  textSecondary: "#CBD5E1",
  primary: "#3B82F6",
  primaryLight: "#60A5FA",
  accent: "#22C55E",
  border: "#1E293B",
  shadow: "#000000",
};

const baseShadow = Platform.select({
  ios: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
  },
  android: {
    elevation: 10,
  },
});

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    width: "100%",
    padding: 20,
    paddingTop: 16,
    alignItems: "center",
  },
  hero: {
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 20,
    backgroundColor: colors.primary,
    width: "100%",
    aspectRatio: 16 / 9,
    maxHeight: 280,
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  heroText: {
    color: colors.textPrimary,
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 8,
    letterSpacing: 0.5,
    textAlign: "center",
  },
  heroSub: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 22,
    maxWidth: "80%",
    textAlign: "center",
  },
  sectionHeader: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 12,
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: "700",
  },
  sectionAction: {
    color: colors.primaryLight,
    fontSize: 14,
    fontWeight: "600",
  },
  chipContainer: {
    marginBottom: 20,
    width: "100%",
  },
  chipList: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.22)",
    backgroundColor: "rgba(255,255,255,0.08)",
    marginRight: 10,
  },
  chipActive: {
    backgroundColor: "rgba(59,130,246,0.22)",
    borderColor: "rgba(59,130,246,0.35)",
  },
  chipText: {
    color: colors.textPrimary,
    fontWeight: "600",
    fontSize: 14,
  },
  listItem: {
    backgroundColor: colors.card,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 18,
    width: "100%",
    maxWidth: cardMaxWidth,
    alignSelf: "center",
    ...baseShadow,
  },
  listItemImage: {
    width: "100%",
    aspectRatio: 16 / 9,
    maxHeight: 220,
  },
  listItemBody: {
    padding: 18,
    alignItems: "center",
  },
  listItemTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.surface,
    marginBottom: 6,
  },
  listItemSub: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 10,
    lineHeight: 20,
  },
  badge: {
    alignSelf: "center",
    backgroundColor: colors.accent,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    marginBottom: 10,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.surface,
    letterSpacing: 0.4,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    ...baseShadow,
    marginTop: 18,
  },
  primaryButtonText: {
    color: colors.card,
    fontWeight: "700",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  backButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  backText: {
    fontSize: 16,
    color: colors.textPrimary,
    marginLeft: 8,
    fontWeight: "600",
  },
  detailsContent: {
    padding: 20,
    alignItems: "center",
  },
  detailsImage: {
    width: "100%",
    aspectRatio: 16 / 9,
    maxHeight: 320,
  },
  detailsHeader: {
    fontSize: 26,
    fontWeight: "800",
    color: colors.surface,
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.textSecondary,
    marginBottom: 16,
  },
  detailsLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 6,
  },
  thinDivider: {
    height: 1,
    backgroundColor: "rgba(15,23,42,0.08)",
    marginVertical: 18,
  },
});
